//Global

const HOME = "/";;
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users

const USERS ="/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD ="/change-passward";

//videos :id값은 변한다는 걸 express는 알고 있다.

const VIDEOS ="/videos";
const UPLOAD = "/upload"
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELITE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELITE_VIDEO
}

export default routes;