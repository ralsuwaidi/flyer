
/* 
Id
Title
Date
Time
Duration
Description
Active
Pre-requisite

*/
import { HiMail } from "react-icons/hi";


const data = {
    flyers: [
        {
            id: "pub-cybersec",
            title: "Top 5 Cyber-Security Startups",
            description: "Coders HQ is working with Dubai Police to find the best local Cyber Security Startups. If you have a cyber security startup then please fill the form for a chance to work with Dubai Police.",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            active: true,
            highlights: [
                'Dubai Police are looking for cyber security startups',
                'Top 5 will be selected',
                'Chance to work with Dubai Police',
                'Applications are open'
            ],
            details: "Please fill the form with as much detail as possible. Explain your startup and where you are in your journey.",
            form: [
                {
                    name: "First name",
                    id: "first_name",
                    type: "text",
                    required: true,
                    placeholder: "John",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Last name",
                    id: "last_name",
                    type: "text",
                    required: true,
                    placeholder: "Doe",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Email",
                    id: "email",
                    type: "email",
                    required: true,
                    placeholder: "example@email.com",
                    helperText: "",
                    icon: HiMail,
                    disabled: false,
                    readOnly: false,  
                },
                {
                    name: "Phone",
                    id: "phone",
                    type: "text",
                    required: true,
                    placeholder: "05XXXXXXXX",
                    helperText: "",
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Startup Name",
                    id: "name",
                    type: "text",
                    placeholder: "",
                    helperText: "",
                    required: true,
                    disabled: false,
                    readOnly: false,
                },
                {
                    name: "Website",
                    id: "website",
                    type: "url",
                    placeholder: "",
                    required: false,
                    addon: "https://",
                    helperText: "If your startup has a website"
                },
                {
                    name: "Startup Details",
                    type: "textarea",
                    id: "details",
                    rows: 4,
                    helperText: "Please fill in as much detail as possible about your startup"
                },
            ]
        },
        {
            id: "event-2",
            title: "This is title one",
            description: "This is a larger description",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            active: true,
        },
        {
            id: "event-2",
            title: "This is title one",
            description: "This is a larger description",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            active: true,
        },
        {
            id: "event-2",
            title: "This is title one",
            description: "This is a larger description",
            image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            active: true,
        }
    ],
}

export {data}