CREATE TABLE tblEmp (
    id int NOT NULL auto_increment,
    txtName varchar(50),
    txtPhone int,
   txtLoc varchar,
   txtAddr varchar(50),
   PRIMARY KEY(id)
);
INSERT INTO tblEmp (txtName, txtPh, txtLoc, txtAddr) 
VALUES ('Anjaly', '9744', 'thodupuzha', 'sreevalsa');
 