const {makeDB} = require("../config/db_config");
const db = makeDB();

var Student = function(student){
    this.data = student.data;
}

Student.get_student_by_id = async(param) => {
    const stu = await db.query(`select * from student where id = ${param.id}`);
    if(stu.length > 0)
    {
        result = {
            Student_detail:{
                status : "1",
                data : stu,
            },
        };
    }
    else
    {
        result = {
            Student_detail:{
                status : "0",
                data : "no data found",
            },
        };
    }
    return result;
}

Student.add_student = async(param) => {
    const query = `insert into student (name,age) values('${param.name}',${param.age})`;
    const stu = await db.query(query);
    // console.log(stu.affectedRows);
    // console.log(stu.insertId); for last insert id
    if(stu.affectedRows > 0)
    {
        result = {
            Student_deatil:{
                status : 1,
                msg : "Data insert successfully"
            },
        };
    }
    else
    {
        result = {
            Student_deatil:{
                status : 0,
                msg : "Failed to insert data"
            },
        };
    }
    return result;
}

Student.update_student = async(param) => {
    const query = `update student set name = '${param.name}' where id = ${param.id}`;
    const stu = await db.query(query);
    if(stu.affectedRows > 0)
    {
        result = {
            Student_deatil:{
                status : 1,
                msg : "Data update successfully"
            },
        };
    }
    else
    {
        result = {
            Student_deatil:{
                status : 0,
                msg : "Failed to update data"
            },
        };
    }
    return result;
}

Student.delete_student = async(param) => {
    const query = `delete from student where id = ${param.id}`;
    const stu = await db.query(query);
    if(stu.affectedRows > 0)
    {
        result = {
            Student_deatil:{
                status : 1,
                msg : "Data delete successfully"
            },
        };
    }
    else
    {
        result = {
            Student_deatil:{
                status : 0,
                msg : "Failed to delete data"
            },
        };
    }
    return result;
}

// Student.register_student = async(param) => {
//     const query = `insert into student (name,age) values('${param.name}',${param.age})`;
//     const stu = await db.query(query);
//     if(stu.affectedRows > 0)
//     {
//         result = {
//             Student_deatil:{
//                 status : 1,
//                 msg : "Data insert successfully"
//             },
//         };
//     }
//     else
//     {
//         result = {
//             Student_deatil:{
//                 status : 0,
//                 msg : "Failed to insert data"
//             },
//         };
//     }
//     return result;
// }
Student.get_all_detail = async(param) => {
    const stu = await db.query(`select * from student where id = ${param.id}`);
    if(stu.length > 0)
    {
         parent_data = "hello";
        const parent = exports.parent_detail(param);
        parent.then(result => {
            // console.log(JSON.stringify(result));
            parent_data = JSON.stringify(result);
            console.log(parent_data);

            result = {
                Student_detail:{
                    status : "1",
                    data : stu,
                    parentData : parent_data
                },
            };
        })
        // console.log(parent);
        
        // result = {
        //     Student_detail:{
        //         status : "1",
        //         data : stu,
        //         parentData : parent_data
        //     },
        // };
    }
    else
    {
        result = {
            Student_detail:{
                status : "0",
                data : "no data found",
            },
        };
    }
    return result;
}


exports.parent_detail = async(param) => {
    const stu = await db.query(`select * from parent where stu_id = ${param.id}`);
    if(stu.length > 0)
    {
        result = {
            Parent_detail:{
                status : "1",
                data : stu,
            },
        };
    }
    else
    {
        result = {
            Student_detail:{
                status : "0",
                data : "no data found",
            },
        };
    }
    return result;
}
module.exports = Student;