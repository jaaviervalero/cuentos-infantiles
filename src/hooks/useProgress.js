import { useState, useEffect } from 'react';
import { differenceInDays, isSameDay } from 'date-fns';

const STORAGE_KEY = 'daily_story_progress';

const getInitialState = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    return {
        streak: 0,
        lastCompletedDate: null,
        history: [] // { id, title, moral, date, completedAt }
    };
};

export const useProgress = () => {
    const [progress, setProgress] = useState(getInitialState);

    // Save to localStorage whenever progress changes
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }, [progress]);

    // Helper to get "Simulated Today"
    const getToday = () => {
        const today = new Date();
        const offset = parseInt(localStorage.getItem('dev_day_offset') || '0');
        if (offset) {
            today.setDate(today.getDate() + offset);
        }
        return today;
    };

    const markStoryAsRead = (story) => {
        const today = getToday();
        const lastDate = progress.lastCompletedDate ? new Date(progress.lastCompletedDate) : null;

        let newStreak = progress.streak;

        // --- STREAK LOGIC (Only one streak point per day) ---
        // Check if we already got points for "today" (simulated)
        const alreadyGotPointsToday = lastDate && isSameDay(today, lastDate);

        if (!alreadyGotPointsToday) {
            if (!lastDate) {
                newStreak = 1; // First ever
            } else if (differenceInDays(today, lastDate) === 1) {
                newStreak += 1; // Consecutive
            } else if (differenceInDays(today, lastDate) > 1) {
                newStreak = 1; // Streak broken
            } else {
                // Same day case handled by alreadyGotPointsToday, 
                // but if time travelled BACKWARDS or something weird, ignore.
            }
        }

        // --- HISTORY LOGIC (Allow multiple stories per day) ---
        let newHistory = [...progress.history];

        // Check if THIS specific story is already in history
        const storyAlreadyRead = newHistory.some(h => h.id === story.id);

        if (!storyAlreadyRead) {
            newHistory.unshift({
                id: story.id,
                title: story.title,
                moral: story.moral,
                date: today.toISOString(),
                completedAt: Date.now()
            });
        }

        setProgress({
            streak: newStreak,
            lastCompletedDate: today.toISOString(),
            history: newHistory
        });
    };

    return {
        progress,
        markStoryAsRead
    };
};
