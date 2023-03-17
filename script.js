
var productName = document.getElementById('productNameInput')
var productCategory = document.getElementById('productCategoryInput')
var productPrice = document.getElementById('productPriceInput')
var productDescription = document.getElementById('productDescriptionInput')
var productSearch = document.getElementById('productSearchInput')
var productContainer = [];
    productContainer =JSON.parse( localStorage.getItem ('allProduct')) ;
    displayProduct()


// create
function createProduct(){
    var product=
    {
        pname:productName.value,
        category:productCategory.value,
        price:productPrice.value,
        desc:productDescription.value
    }
    productContainer.push(product)
    console.log(productContainer)
    localStorage.setItem('allProduct',JSON.stringify( productContainer))
    displayProduct()
}

//clear
function clearForm(){
    productName.value='';
    productCategory.value='';
    productPrice.value='';
    productDescription.value='';
}

//display
function displayProduct(){
     var trs='';
    for(var i=0; i<productContainer.length; i++){
        trs+=`<tr>
        <td>${i}</td>
        <td>${productContainer[i].pname}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].desc}</td>
        <td><button class="btn btn-warning"><i class="fa fa-solid fa-edit"></i></button></td>
        <td><button onclick="deleteProduct(${i})" class="btn btn-danger"><i class="fa fa-solid fa-trash"></i></button></td>
        </tr>`
    }
    document.getElementById("tablebody").innerHTML=trs;
}

//delete
function deleteProduct(index){
    productContainer.splice(index,1)
    console.log(productContainer)
    displayProduct()

}

//search
function searchProduct(){
    var trs='';
    for(var i=0; i<productContainer.length; i++){
        if(productContainer[i].pname.toLowerCase().includes(productSearch.value.toLowerCase())){
            trs+=`
            <tr>
            <td>${i}</td>
            <td>${productContainer[i].pname}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].desc}</td>
            <td><button class="btn btn-warning"><i class="fa fa-solid fa-edit"></i></button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-danger"><i class="fa fa-solid fa-trash"></i></button></td>
            </tr>`
        }
    }
    document.getElementById("tablebody").innerHTML=trs;
}

