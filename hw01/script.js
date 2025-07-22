
const headings = document.querySelectorAll("main h1, main h2, main h3");

const tableOfContent = document.getElementById("table-of-content");
if (headings) {
    headings.forEach((heading, index) => {
        // Set header's id
        heading.id = `main-header-${index}`;
        heading.style.scrollMarginTop = "1px";
        const newAnchor = document.createElement("a");
        newAnchor.textContent = heading.textContent;
        console.log(heading.tagName, heading.textContent);
        switch (heading.tagName) {
            case "H1":
                break
            case "H2":
                newAnchor.classList.add("pl-4");
                break
            case "H3": 
                newAnchor.classList.add("pl-8");
                break
        }
        newAnchor.href = `#${index}`
        tableOfContent.appendChild(newAnchor);
    }) 
}

const scrollObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id;
        })
    }
)