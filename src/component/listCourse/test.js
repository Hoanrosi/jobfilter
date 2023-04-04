const filter = ["senior", "react", "vuejs"];

const listData = [
  {
    id: 1,
    company: "Photosnap",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969113.png",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "https://cdn-icons-png.flaticon.com/512/5969/5969160.png",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "https://cdn-icons-png.flaticon.com/512/5969/5969288.png",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
];

// console.log(listData)

// const listDataNew = listData.filter((item) => item.role === filter);
const listDataNew = listData.filter((item)=>{
    filter.some((value) =>{
        item.role.includes(value)
        item.level.includes(value)
        item.languages.includes(value)
        item.tools.includes(value)
    })
        console.log(item.role)
})
// const listDataNew =  filter.some(value => listData.map(item => {
//     item.role.includes(value)
//     item.level.includes(value)
//     item.languages.includes(value)
//     item.tools.includes(value)
// }))


console.log(listDataNew);
