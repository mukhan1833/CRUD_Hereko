// const addUser = () => {
//     const stname = document.getElementById("stname").value;
//     const stroll = document.getElementById("stroll").value;
//     const stdepart = document.getElementById("stdepart").value;
//     const stsection = document.getElementById("stsection").value;
//     const addUserURL = "https://mongoprac1.herokuapp.com/user";
  
//     if (stname === "" || stroll === "" || stdepart === "" || stsection === "") {
//       alert("Please Fill All the Fields");
//     } else {
//       const userData = {
//         stname:stname,
//         stroll:stroll,
//         stdepart:stdepart,
//         stsection:stsection,
//       };
  
//       axios.post(addUserURL, userData).then((response) => {
//         alert(`${userData.stname} is Added`);
//         getUsers();
//         const stname = document.getElementById("stname").value="";
//         const stroll = document.getElementById("stroll").value="";
//         const stdepart = document.getElementById("stdepart").value="";
//         const stsection = document.getElementById("stsection").value="";
        
//       });
//     }
//   };


function postcreate(){
    console.log("Usman")
    let stname=document.getElementById("stname").value;
    let stroll=document.getElementById("stroll").value;
    let stdepart=document.getElementById("stdepart").value;
    let stsection=document.getElementById("stsection").value;
    
    axios.post('https://mongoprac1.herokuapp.com/user',{
        
        stname:stname,
        stroll:stroll,
        stdepart:stdepart,
        stsection:stsection
    }).then(function(response){
        console.log(response);
        
        alert(response.data);
    }).catch(function(error){
        console.log(error())
    });

}

// const getUsers = () => {
//   const URL = "https://mongoprac1.herokuapp.com/users";

//   axios.get(URL).then((response) => {
//     const users = response.data;

//     if (response.data.length === 0) {
//       responseDiv.innerHTML = "No Users";
//     } else {
//       responseDiv.innerHTML = "";

//       const usersList = users.map((user) => {
//         return `<tr><td>${user._id}</td><td>${user.stname}</td><td>${user.stroll}</td><td>${user.stdepart}</td><td>${user.stsection}</td><td><button class="btn btn-primary" onclick="editUser('${user._id}')">Edit</button></td><td><button class="btn btn-danger" onclick="deleteUser('${user._id}')">Delete</button></td></tr>`;
//       });

//       resultDiv.innerHTML = "";

//       resultDiv.innerHTML = usersList.join("");
//     }
//   });
// };
function get_all(){
    axios.get('https://mongoprac1.herokuapp.com/users')
  .then(function (response) {
      $html='';
    console.log(response);
    var i=0;
    response.data.forEach(function(data) {
        if(data.stname != undefined){
        $html += '<tr>';
        $html += '<td id="stname'+i+'"> '+data.stname+'</td>';
        $html += '<td id="stroll'+i+'"> '+data.stroll+'</td>';
        $html += '<td id="stdepart'+i+'"> '+data.stdepart+'</td>';
        $html += '<td id="stsection'+i+'"> '+data.stsection+'</td>';
        
        $html += '<td><a href="javascript:void(0)" onclick="get_record(this);" id='+i+'>View</td>';
        $html += '</tr>';
        
    } 
    
    i++;
});
    console.log($html);
    console.log(document.getElementById('tblper'));
    document.getElementById('tblper').innerHTML = $html;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


function get_record($obj){
    var id = $obj.getAttribute('id');
    id = parseInt(id);
    let stname = document.getElementById('stname'+id).innerHTML;
    let stroll = document.getElementById('stroll'+id).innerHTML;
    let stdepart = document.getElementById('stdepart'+id).innerHTML;
    let stsection = document.getElementById('stsection'+id).innerHTML;

    console.log(stname,stroll,stdepart,stsection,document.getElementById('stname'+id));

    document.getElementById('stname').value=stname;
    document.getElementById('stroll').value=stroll;
    document.getElementById('stdepart').value=stdepart;
    document.getElementById('stsection').value=stsection;        
    document.getElementById('student_id').value=id;        
}

function update_student(){
  let stname = document.getElementById('stname').value;
  let stroll = document.getElementById('stroll').value;
  let stdepart = document.getElementById('stdepart').value;
  let stsection = document.getElementById('stsection').value;

  let id = document.getElementById('student_id').value;
  axios.put('https://mongoprac1.herokuapp.com/user/'+id, {
    stname:stname,
    stroll:stroll,
    stdepart:stdepart,
    stsection:stsection
})
  .then(response => {
    alert("User Updated");
    get_all();

  })
  .catch(error => {
    console.log(err);
  })
}
function delete_student(){
    let id = document.getElementById('student_id').value;
    axios.delete('https://mongoprac1.herokuapp.com/user/'+id)
  .then(function (response) {
    console.log(response);
    alert(response.data)
    get_all();
})
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });    
}