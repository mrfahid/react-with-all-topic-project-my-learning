function customReander(reactElement, container) {
    // this good appourch but dot'n use DRY ok 
    
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href",reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") continue
            domElement.setAttribute(prop, reactElement.props [prop])
        }
    
        
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click and visit Google"
}

const mainContanier = document.getElementById('root');

customReander(reactElement, mainContanier)