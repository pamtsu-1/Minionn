const scheduleEvents = [

    /* Thêm lịch ở đây */
	{
        image: "imagesEvent/ColorFiesta10-2026.jpg",
        title: "COLOR FIESTA 17: WONDERLAND",
        date: "3-4/10/2026",
        time: "9:00am-20:00pm",
        type: "LIVE",

        link: "https://www.facebook.com/share/p/1DYKhmqZXD/"
    },
	
    {
        image: "imagesEvent/Hobby07-2026.jpg",
        title: "Hobby Horizon",
        date: "17-18-19/07/2026",
        time: "9:00am-20:00pm",
        type: "LIVE",

        link: "https://www.facebook.com/share/p/1FQjds2jKn/"
    }

];


const scheduleList =
    document.getElementById("scheduleList");


scheduleEvents.forEach(item => {

    const card =
        document.createElement("a");

    card.className = "schedule-card";

    card.href = item.link;

    card.target = "_blank";


    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">

        <div class="schedule-info">

            <h3>${item.title}</h3>

            <p class="schedule-type">
                ${item.type}
            </p>

            <p class="schedule-date-text">
                ${item.date}
            </p>

            <p>
                ${item.time}
            </p>

        </div>
    `;


    scheduleList.appendChild(card);

});