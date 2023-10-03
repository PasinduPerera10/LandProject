function Logout() {
    localStorage.clear("username");
    window.location = "/"
}

export default Logout;