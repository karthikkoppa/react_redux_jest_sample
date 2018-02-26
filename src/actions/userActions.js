import * as allActions from './allActions';

export function receiveUser(data) {
    return {type: allActions.RECEIVE_USER, user: data};
}

export function fetchUser() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>
                response.json().then(data => ({
                    data: [{
                        "id": 1,
                        "name": "abc",
                        "username": "xyz",
                        "email": "abc@xyz.com",
                        "address": {
                            "street": "aaa",
                            "suite": "bbb",
                            "city": "bangalore",
                            "zipcode": "12345-6789",
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "www.org",

                    },
                        {
                            "id": 2,
                            "name": "efg",
                            "username": "hij",
                            "email": "efg@hij",
                            "address": {
                                "street": "bbb",
                                "suite": "cccc",
                                "city": "bang",
                                "zipcode": "98765-4321",

                            },
                            "phone": "010-692-6593 x09125",
                            "website": "xyz.net",

                        }],
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status === 200) {
                    dispatch(receiveUser(response.data))
                } else {
                    var flash = {
                        type: 'error',
                        title: 'Error getting task list',
                        content: 'There was an error getting the task list. Please try again.'
                    }
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}