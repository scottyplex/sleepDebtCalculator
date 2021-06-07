getSleepHours = day => {
    switch (day) {
        case 'Sunday':
            return 6;
            break;
        case 'Monday':
            return 8;
            break;
        case 'Teusday':
            return 7;
            break;
        case 'Wednesday':
            return 4;
            break;
        case 'Thursday':
            return 6;
            break;
        case 'Friday':
            return 6;
            break;
        case 'Saturday':
            return 7;
            break;
    }
}

const getActualSleepHours = () => getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Teusday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep');
    }
    if (actualSleepHours > idealSleepHours) {
        const sleepDebt = actualSleepHours - idealSleepHours
        console.log(`You got ${sleepDebt} hours more sleep than you needed`);
    }
    if (actualSleepHours < idealSleepHours) {
        const sleepDebt = idealSleepHours - actualSleepHours
        console.log(`You should get some rest you missing ${sleepDebt} hours of sleep!!`);
    }
}

calculateSleepDebt()