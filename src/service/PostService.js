import axios from 'axios';

function getPostsByPageNCondition(page, condition) {
    const userId = localStorage.getItem('userId');

    return axios.get("http://localhost:8080/api/post/get/whole-by-page-n-condition", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "condition": condition,
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

function getPropertyPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/recent/property", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10
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

function getJobPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/recent/job", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10
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

function getTransactionPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/recent/transaction", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10
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

function getSocietyPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/recent/society", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10
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

function getTravelPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/recent/travel", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10
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

function getStudyPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/recent/study", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10
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

function getSharePostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/property/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "쉐어"
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

function getRentPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/property/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "렌트"
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

function getPropertyTransactionPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/property/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "매매"
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

function getRecruitmentPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/job/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "구인"
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

function getJobSeekingPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/job/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "구직"
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

function getJobTutoringPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/job/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "과외"
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

function getCarPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/transaction/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "자동차"
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

function getNecessitiesPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/transaction/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "생활용품"
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

function getTransactionEtcPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/transaction/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "기타"
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

function getClubPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/society/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "동호회"
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

function getLifeStylePostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/society/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "라이프스타일"
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

function getFriendshipPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/society/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "친목"
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

function getRestaurantPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/travel/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "레스토랑"
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

function getPlacePostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/travel/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "여행지"
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

function getCoursePostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/travel/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "코스"
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

function getSchoolPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/study/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "학교후기"
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

function getWorkingHolidayPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/study/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "워홀후기"
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

function getLanguageStudyPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/study/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "어학연수후기"
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

function getJobReviewPostsByPage(page) {
    return axios.get("http://localhost:8080/api/post/get/pageable/study/subcategory", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "page": page,
            "size": 10,
            "subCategory": "취업후기"
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

function getWholeOwnPosts(page) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/pageable/own/posts", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
        params: {
            "page": page,
            "size": 10,
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

function getWholeOthersPosts(page, userId) {
    return axios.get("http://localhost:8080/api/post/get/pageable/others/posts", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
        params: {
            "page": page,
            "size": 10,
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

function getWholeLikedPosts(page) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/pageable/liked/posts", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "userId": userId
        },
        params: {
            "page": page,
            "size": 10,
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

function getRecent5JobPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/job/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getRecent5PropertyPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/property/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getRecent5TransactionPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/transaction/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getRecent5SocietyPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/society/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getRecent5TravelPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/travel/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getRecent5StudyPosts() {
    return axios.get("http://localhost:8080/api/post/get/recent-5/study/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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

function getSpecificPropertyPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/specific/property", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId,
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

function getSpecificJobPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/specific/job", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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

function getSpecificTransactionPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/specific/transaction", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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

function getSpecificSocietyPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/specific/society", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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

function getSpecificTravelPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/specific/travel", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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

function getSpecificStudyPost(postId) {
    const userId = localStorage.getItem('userId') || "";

    return axios.get("http://localhost:8080/api/post/get/specific/study", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'userId': userId
        },
        params: {
            "postId": postId
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

function getSpecificPost(postId) {
    return axios.get("http://localhost:8080/api/post/get/summarised/specific/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        params: {
            "postId": postId,
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

function postProperty(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/property", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postJob(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/job", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postTransaction(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/transaction", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postSociety(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/society", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postTravel(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/travel", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function postStudy(postData) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.post("http://localhost:8080/api/post/create/study", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function updateTravel(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/update/travel", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function updateProperty(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/update/property", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function updateJob(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/update/job", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function updateTransaction(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/update/transaction", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function updateStudy(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/update/study", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function updateSociety(postData) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/update/society", postData, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        }
    })
    .then(response => {
        if (response.data) {
            return true;
        }
        return false;
    })
    .catch(error => {
        console.log(error);
        return false;
    });    
}

function getUpdatePropertyPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/update/propertyDto", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateJobPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/update/jobDto", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateTransactionPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/update/transactionDto", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateTravelPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/update/travelDto", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateStudyPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/update/studyDto", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function getUpdateSocietyPostDto(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/update/societyDto", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function searchPropertyPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/property/by/search/option", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchJobPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/job/by/search/option", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchTransactionPost(title, subCategory, suburb, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/transaction/by/search/option", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "suburb" : suburb,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchSocietyPost(title, subCategory, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/society/by/search/option", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchTravelPost(title, subCategory, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/travel/by/search/option", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function searchStudyPost(title, subCategory, keywords, page) {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.get("http://localhost:8080/api/post/get/study/by/search/option", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "title": title, 
            "subCategory": subCategory,
            "keywords": keywords,
            "page": page,
            "size": 10
        },
        paramsSerializer: (params) => {
            return Object.keys(params)
                .map(key => {
                    if (Array.isArray(params[key])) {
                        return params[key]
                            .map(value => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                            .join("&");
                    }
                    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
                })
                .join("&");
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

function deletePostById(postId) {
    const userId = localStorage.getItem('userId') || "";
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.delete("http://localhost:8080/api/post/delete/post", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'accessToken': accessToken,
            'refreshToken': refreshToken,
            "userId": userId
        },
        params: {
            "postId": postId
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

function pinPost(postId) {
    const userId = localStorage.getItem('userId');
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    return axios.put("http://localhost:8080/api/post/pin/post", {}, {
        headers: {
            "Content-Type": "multipart/form-data",
            'accessToken': accessToken,
            'refreshToken': refreshToken,
        },
        params: {
            "userId": userId,
            "postId": postId
        }
    })
    .then((response) => {
            return response.data;
        }
    )
    .catch((error) => {
            console.log(error);
            return null;
        }
    )
}

export { getPostsByPageNCondition, getPropertyPostsByPage, getJobPostsByPage, getTransactionPostsByPage, getSocietyPostsByPage, getTravelPostsByPage, getStudyPostsByPage, getSharePostsByPage, getRentPostsByPage, getPropertyTransactionPostsByPage, getRecruitmentPostsByPage, getJobSeekingPostsByPage, getJobTutoringPostsByPage, getCarPostsByPage, getNecessitiesPostsByPage, getTransactionEtcPostsByPage, getClubPostsByPage, getLifeStylePostsByPage, getFriendshipPostsByPage, getRestaurantPostsByPage, getPlacePostsByPage, getCoursePostsByPage, getSchoolPostsByPage, getWorkingHolidayPostsByPage, getLanguageStudyPostsByPage, getJobReviewPostsByPage, getWholeOwnPosts, getWholeOthersPosts, getWholeLikedPosts, getRecent5JobPosts, getRecent5PropertyPosts, getRecent5TransactionPosts, getRecent5SocietyPosts, getRecent5TravelPosts, getRecent5StudyPosts, getSpecificPropertyPost, getSpecificJobPost, getSpecificTransactionPost, getSpecificSocietyPost, getSpecificTravelPost, getSpecificStudyPost, getSpecificPost, postProperty, postJob, postTransaction, postSociety, postTravel, postStudy, updateProperty, updateJob, updateTransaction, updateSociety, updateTravel, updateStudy, getUpdatePropertyPostDto, getUpdateJobPostDto, getUpdateTransactionPostDto, getUpdateTravelPostDto, getUpdateStudyPostDto, getUpdateSocietyPostDto, searchPropertyPost, searchJobPost, searchTransactionPost, searchSocietyPost, searchTravelPost, searchStudyPost, deletePostById, pinPost };