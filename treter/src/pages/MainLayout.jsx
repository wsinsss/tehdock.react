import { NavLink, Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="container mx-auto ">

            <header className="flex justify-end gap-x-5 py-5">
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/admin">Админка</NavLink>
            </header>

            <main>
                <Outlet />
            </main>

            {/* <footer>
                2025. Все права защищены
            </footer> */}

        </div>
    )
}
