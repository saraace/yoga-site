import Schedule from '../../../components/SingleLocationSchedule';

const LocationSchedulePage = () => {

    const location = {
        title: 'North Fort Lauderdale', 
        address: '6131 N. Federal Hwy., Fort Lauderdale, FL 33308', 
        classes: [
            {
                id: 1, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '16'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 2, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '16'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 3, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '16'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 4, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '16'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            },
            {
                id: 5, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '17'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 6, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '17'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 7, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '17'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 8, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '17'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            },
            {
                id: 9, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '18'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 10, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '18'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 11, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '18'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }, 
            {
                id: 12, 
                title: 'Fusion FIIT 45', 
                date: {
                    month: 'NOV', 
                    day: '18'
                },
                time: '11:15 am', 
                duration: '45 min', 
                instructor: 'Paige Held', 
            }
        ]
    };
    
    return(
        <Schedule {...location}/>
    )
}

export default LocationSchedulePage;