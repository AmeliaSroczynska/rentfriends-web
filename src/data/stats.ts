export const satisfiedUsers = 4000;
export const appRating = 4.5;

export function formatCompactCount(value: number): string {
    if (value < 1000) return String(value);
    const thousands = Math.round((value / 1000) * 10) / 10;
    return `${thousands}k`;
}

export const satisfiedUsersDisplay = formatCompactCount(satisfiedUsers);
export const appRatingDisplay = appRating.toFixed(1);
