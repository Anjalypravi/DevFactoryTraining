CREATE TABLE tblemployee (
    Emp_id int NOT NULL AUTO_INCREMENT,
      firstName	varchar(50),
       lastName varchar(50),
       email varchar(100),
       age int,
	   jobTitle	varchar(50),
	   empstartrddon	datetime,
		PRIMARY KEY (Emp_id)
);

INSERT INTO tblemployee (Emp_id, firstName, lastName,email,age,jobTitle,empstartrddon)
VALUES 
('101','Diane','William','dwilliam@gmail.com','40','Sale manager','11/02/2011');
