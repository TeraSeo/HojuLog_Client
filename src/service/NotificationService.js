import axios from 'axios';

function getNotificationCount(userId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get("http://localhost:8080/api/notification/get/count", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "userId": userId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return [];
        }
    )
}

function getNotifications(userId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.get("http://localhost:8080/api/notification/get/recent/notifications", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "userId": userId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return [];
        }
    )
}

function setNotificationAsRead(notificationId) {
    const accessToken = localStorage.getItem('accessToken'); 
    const refreshToken = localStorage.getItem('refreshToken'); 

    if (!accessToken || !refreshToken) {
        return Promise.resolve(false);
    }

    return axios.put("http://localhost:8080/api/notification/update/notification/as/read", 
        {
        },
        {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken
        },
        params: {
            "notificationId": notificationId
        },
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return [];
        }
    )
}

export { getNotificationCount, getNotifications, setNotificationAsRead }