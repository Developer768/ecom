export {default} from "next-auth/middleware"



// Not adding below code will protect whole website
// Add urls that you want to protect
export const config = {
    matcher: [
        "/dashboard", // Protect Middleware Page
        "/dashboard/:path*", // Protect all pages inside Middleware Page
        // "/((?!register|api|login).*)", // Don not Protect register, api and login page
    ]
}