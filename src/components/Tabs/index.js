const Tabs = ({ tabs }) => {
    return(
        <ul>
            {tabs.map((tab, i) => (
                <li key={i}>{tab}</li>
            ))}
        </ul>
    )
}

export default Tabs;