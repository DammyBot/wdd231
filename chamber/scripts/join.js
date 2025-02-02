const timeStamp = document.querySelector("#timestamp");
const submit = document.querySelector("form");

const title = document.querySelector("#organization-title");
const regex = /^[a-zA-Z\s- ]{7,}$/;

const date1 = new Date();
document.addEventListener("DOMContentLoaded", () => {
    timeStamp.value = `${date1.getDate()}-${date1.getMonth()+1}-${date1.getFullYear()}`;
});

const infoElements = document.querySelectorAll(".get-detail, .get-detail1, .get-detail2, .get-detail3");

const membershipDetails = [
    {
        title: "Non-Profit Membership: $100",
        details: [
            "Non-Profit Membership: 1 Free Event",
            "Free Entry to all events"
        ]
    },
    {
        title: "Bronze Membership: $200",
        details: [
            "Bronze Membership: 2 Free Events",
            "Discounts on all Chamber of Commerce merchandise"
        ]
    },
    {
        title: "Silver Membership: $300",
        details: [
            "Silver Membership: 3 Free Events",
            "Access to all Chamber of Commerce resources"
        ]
    },
    {
        title: "Gold Membership: $400",
        details: [
            "Gold Membership: 4 Free Events",
            "Access to all Chamber of Commerce events"
        ]
    }
];

const button = document.createElement("button");
button.textContent = "Close";
button.id = "close";

infoElements.forEach((infoElement, index) => {
    infoElement.addEventListener("click", () => {
        const membership = membershipDetails[index];
        modal.innerHTML = `
            <h3>${membership.title}</h3>
            ${membership.details.map(detail => `<p>${detail}</p>`).join("")}
        `;
        modal.appendChild(button);
        modal.showModal();
    });
});

button.addEventListener("click", () => {
    modal.close();
});

submit.addEventListener("submit", (event)=>{
    if(!regex.test(title.value)){
        event.preventDefault();
        alert("Please enter a valid organization title");
    }
})