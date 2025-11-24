import pool form './db.js'

//to create a function to fetch data from mysql table
export async function fetchStudentsList(req,res)
{
	try
	{
		//fetching data from MySQL table
		const [result] = await pool.query("select * from student");
		//setting this data inot response in json
		res.json(result);
	}
	catch(err)
	{
		console.log("Unable to insert data ",err);
	}
}

//add a student
export async function insertStudent(req,res)
{
	try{
		const add=await pool.query("INSERT INTO student () VALUES ()")
		res.json({add});
	}
	catch(err)
	{
		console.log("Unable to add data ",err);
	}
}

//update student details

export async function updateStudent(req,res)
{
	try{
		const update=await pool.query("UPDATE student SET ");
		res.json({update});
	}
	catch(err)
	{
		console.log("Unable to update data ",err);
	}
}

//delete student details


export async function deleteStudent(req,res)
{
	try{
		const delete1 =await pool.query("DELETE FROM student WHERE");
		res.json({delete1});
	}
	catch(err)
	{
		console.log("Unable to delete data ",err);
	}
}
