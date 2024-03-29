import AdminDashboard from "@/app/components/Dashboard/adminDashboard";
import UserDashboard from "@/app/components/Dashboard/userDashboard";
import {cookieUtils} from "@/app/lib/utils";
import {IUser} from "@/app/lib/actions";

export default function Dashboard() {
    const userSession = cookieUtils<IUser>('session')
    const userRole = userSession?.role // Assuming 'role' is part of the session object
    const username = userSession?.username;

    if (userRole === 'admin') {
        return <AdminDashboard username={username}/>
    } else if (userRole === 'user') {
        return <UserDashboard username={username}/>
    }
}
