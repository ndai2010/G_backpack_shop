
let data = [
    {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        path: "/admin/manage-users",
        icon: (
            <i className="fa-solid fa-user icon"
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
            />
        ),
    },
    {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        path: "/admin/manage-orders",

        icon: (
            <i className="fa-solid fa-cart-shopping icon"
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                }}
            />
        ),
    },
    {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        path: "/admin/manage-users",

        icon: (
            <i className="fa-solid fa-coins icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
            />
        ),
    },
    {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        path: "/admin/manage-users",

        icon: (
            <i className="fa-solid fa-wallet icon"
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                }}
            />
        ),
    }
]

export default data