<?php
$host="localhost";
$user="root";
$pswd="";
$db="test";
$conn=mysqli_connect($host,$user,$pswd,$db) or die("Connection failed!!");
if($conn){
$q1=$_REQUEST['searchtxt'];
//	echo "conection esatablished!!!!!!!";
$result=mysqli_query($conn,"SELECT * from country where name like '$q1%'");
$arr=array();
if(mysqli_num_rows($result)>0){
header("Content-type:application:json;charset:UTF-8");	
while($row=mysqli_fetch_array($result)){
	array_push($arr,$row);
}
echo json_encode($arr);
}
}
?>
