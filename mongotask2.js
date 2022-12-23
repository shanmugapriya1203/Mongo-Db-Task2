//To create user in zen programme


db.zen.insertMany([
    {
        userID:24,
        name:"Sam",
        email:"priyamuthukumar1203@gmail.com",
        contact:"70941*****",
        Course:"Full Stack Development",
        Batch:"B40WD"
    },
    {
        userID:132,
        name:"Sowmiya",
        email:"sowmiya1203@gmail.com",
        contact:"83421*****",
        Course:"Full Stack Development",
        Batch:"B40WD"
    },
    {
        userID:16,
        name:"Kumar",
        email:"kumar1412@gmail.com",
        contact:"87542*****",
        Course:"UI/UX Designer",
        Batch:"B40WD2"
    },
    {
        userID:45,
        name:"Shanmathi",
        email:"shanmathi1203@gmail.com",
        contact:"63741*****",
        Course:"Full Stack Development",
        Batch:"B40WD"
    },
]);

db.code.insertMany([
    {
        total_problems:152,
        topic:"MAthematics",
        topic_problems:"86",
        balance_run_count:"200",

    },
    {
        userID:16,
        total_problems:100,
        topic:"Strings",
        topic_problems:"74",
        balance_run_count:"156",

    },
    {
        userID:24,
        total_problems:93,
        topic:"Companies",
        topic_problems:"26",
        balance_run_count:"100",

    },
    {
        userID:45,
        total_problems:152,
        topic:"Amazon",
        topic_problems:"12",
        balance_run_count:"250",

    },

]);
//To create data for atteb=ndance
db.attendance.insertMany([
    {
        userID:24,
        topic:"React",
        present:true,

    },
    {
        userID:132,
        topic:"Sql",
        present:false,

    },
    {
        userID:16,
        topic:"Mongofb",
        present:true,

    },
    {
        userID:45,
        topic:"Mongodb",
        present:false,

    },
]);
//To create data for topic
db.topic.insertMany([
    {
        topic:"React",
        started:new Date("2020-11-05")
    },
    {
        topic:"HTML",
        started:new Date("2020-10-07")
    },
    {
        topic:"SQL",
        started:new Date("2020-10-10")
    },
    {
        topic:"MongoDB",
        started:new Date("2020-10-22")
    },
    {
        topic:"NodeJs",
        started:new Date("2020-12-25")
    },
]);
//To create data for task
db.task.insertMany([
    {
        topic:"HTML",
        topic_date:new Date("2020-10-01"),
        submit:true,
        late:false,
        
    },
    {
        topic:"CSS",
        topic_date:new Date("2020-10-28"),
        submit:false,
        late:true,
        
    },
    {
        topic:"React",
        topic_date:new Date("2020-12-25"),
        submit:true,
        late:true,
        
    },
]);
//To create a data for drive

db.drives.insertMany([
    {
        userID:24,
        drive_date:new Date("2020-10-05"),
        cpy_name:"Zoho"
    },
    {
        userID:132,
        drive_date:new Date("2020-10-20"),
        cpy_name:"Google"
    },
    {
        userID:16,
        drive_date:new Date("2020-10-17"),
        cpy_name:"L and T"
    },
    {
        userID:45,
        drive_date:new Date("2020-10-25"),
        cpy_name:"Instagram"
    },

   
]);
//To create data for mentor
db.mentor.insertMany([
    {
        id:1,
        mentor_name:"Raghav",
        class_name:"React",
        count:100
    },

    {
        id:3,
        mentor_name:"Raja",
        class_name:"NodeJs",
        count:10,
    },
    {
        id:2,
        mentor_name:"Sangeetha",
        class_name:"Mongodb",
        count:20
    }
]);


//1. Find all the topics and tasks which are thought in the month of October

db.task.find({
    $and:[
        {topic_date:{$gte:new Date("2020-10-15")}},
        {topic_date:{$lte:new Date("2020-10-31")}},

    ]
})
db.topic.find({
    $and:[
        {started:{$gte:new Date("2020-10-15")}},
        {started:{$lte:new Date("2020-10-31")}},
    ]
});

//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.drives.find({
    $and:[
        {
            drive_date:{ $gte:new Date("2020-10-15")}},
        {drive_date:{$lte:new Date("2020-10-31")}}
    ]
})
// 3.Find all the company drives and students who are appeared for the placement.
db.drives.aggregate({
    $lookup:{
        from:"zen",
        localField:" userID",
        foreignField:" userID",
        as:"drives",
        pipeline:[{$project:{name:1}}],
    },
});

//5.Find all the mentors with who has the mentee's count more than 15

db.mentor.find({count:{$gt:15}});

