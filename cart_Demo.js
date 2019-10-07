
// Phần 1

var cart= [];
var x = 0;
var qty1 =0 ;
var qty2 =0 

function qtyCart(sl){
	
	x++;
	document.getElementById('sl_cart').innerHTML = x;
	switch(sl)
	{
		case 1: qty1++;
				alert("Nho mỹ đã thêm vào giỏ hàng");
				 break;

		case 2: qty2++; 
			alert("Táo mỹ đã thêm vào giỏ hàng");
		break;
	}
}


var cart1= [];
var cart2= [];
//table giỏ hàng
function cart_Table()
			{	
				var delete_img ="https://cdn4.iconfinder.com/data/icons/basic-ui-colour/512/ui-02-512.png";

				var product1 = [];
				var img1 = "http://at01.chonweb.vn/wp-content/uploads/2019/07/nho.png";
				var name1 = "Nho mỹ";
				var price1 = 120000;
				var total1;
				total1 = price1* qty1;
				document.getElementById("delete_img").src= delete_img;
				document.getElementById("img_1").src= img1;
				document.getElementById("nameSP_1").innerHTML = name1;
				document.getElementById("price_1").innerHTML = price1;
				document.getElementById("qty_1").value = qty1;
				document.getElementById("tt1").innerHTML = total1;
				if(qty1<=0)
				{
					document.getElementById("row_1").style.display ="none";
				}
				

				product1 = [img1,name1,price1,qty1,total1];
				cart1 = product1;

				// Product 2
				var product2 = [];
				var img2 = "http://at01.chonweb.vn/wp-content/uploads/2019/07/CC_Apple_withPLU-Stickers-300x300.png";
				var name2 = "Táo mỹ";
				var price2 = 150000;
				var total2;
				total2 = price2* qty2;
				document.getElementById("delete_img2").src= delete_img;
				document.getElementById("img_2").src= img2;
				document.getElementById("nameSP_2").innerHTML = name2;
				document.getElementById("price_2").innerHTML = price2;
				document.getElementById("qty_2").value = qty2;
				document.getElementById("tt2").innerHTML = total2;
				if(qty2<=0){
					document.getElementById("row_2").style.display ="none";
				}
				

				product2 = [img2,name2,price2,qty2,total2];
				cart2 = product2;
			
				
				
			}

function dem1(){
	qty1 = document.getElementById("qty_1").value;
	cart1[4]=cart1[2]*qty1;
	document.getElementById("tt1").innerHTML = cart1[4];
	
}
function dem2(){
	qty2 = document.getElementById("qty_2").value;
	cart2[4]=cart2[2]*qty2;
	document.getElementById("tt2").innerHTML = cart2[4];
	
}

var arrayTotal = [];
function update(){
	var sum;
	var Total = []; 
	sum =cart1[4]+cart2[4];
	document.getElementById("tamtinh").innerHTML = sum;
	document.getElementById("tong").innerHTML = sum;
	Total = [sum];
	arrayTotal = Total;

}


function load() {
	// body...
	cart_Table();
	update();
	var a = document.getElementById('contener_0');
	a.style.display="none";
	var b = document.getElementById('contener_1');
	b.style.display = "block";
}
function load2(){
	loadSP();
	var a = document.getElementById('contener_1');
	a.style.display="none";
	var b = document.getElementById('contener_2');
	b.style.display = "block";
	document.getElementById('text_card').innerHTML ="Thanh toán online bằng Internet Banking hoặc thẻ ATM nội địa để được giảm giá ngay 5%. hổ trợ tất cả ngân hàng, thanh toán an toàn qua cổng VTCPay";
}

// Part 2



function loadSP(){

		document.getElementById("tam").innerHTML = arrayTotal[0];
		document.getElementById("sale").innerHTML =  arrayTotal[0]*(5/100) ;
 		document.getElementById("total").innerHTML = arrayTotal[0];

  		document.getElementById("imgPro_1").src = cart1[0];
  		document.getElementById("namePro_1").innerHTML = cart1[1];
		document.getElementById("pricePro_1").innerHTML = cart1[2];
		document.getElementById("qtyPro_1").innerHTML = cart1[3];
		if (qty1 <= 0) {
			document.getElementById("rowPro_1").style.display = "none";
		} 
		document.getElementById("imgPro_2").src = cart2[0];
  		document.getElementById("namePro_2").innerHTML = cart2[1];
		document.getElementById("pricePro_2").innerHTML = cart2[2];
		document.getElementById("qtyPro_2").innerHTML = cart2[3];
		if (qty2 <= 0) {
			document.getElementById("rowPro_2").style.display = "none";
		} 

}






function select() {
	// body...
	var c =document.getElementById('selectCard');
	var getc = c.options[c.selectedIndex].value;
 	getc = parseInt(getc);
 	var giamgia = 0 ;
 	var tong = 0;
 	switch(getc){
 		case 1:{
 			giamgia = arrayTotal[0]*(5/100);
 			tong = arrayTotal[0] - giamgia ;
 			document.getElementById("sale").innerHTML = giamgia;
 			document.getElementById("total").innerHTML = tong;

 			document.getElementById('text_card').innerHTML ="Thanh toán online bằng Internet Banking hoặc thẻ ATM nội địa để được giảm giá ngay 5%. hổ trợ tất cả ngân hàng, thanh toán an toàn qua cổng VTCPay";
 			break;
 		}
 		case 2:{
 			giamgia = arrayTotal[0]*(10/100);
 			tong = arrayTotal[0] - giamgia ;
 			document.getElementById("sale").innerHTML = giamgia;
 			document.getElementById("total").innerHTML = tong;
 			document.getElementById('text_card').innerHTML ="Thanh toán online bằng Cổng Thanh Toán để được giảm giá ngay 10%. hổ trợ tất cả ngân hàng";
 			break;
 		}
 		case 3:{
 			giamgia = 0;
 			tong = arrayTotal[0] - giamgia ;
 			document.getElementById("sale").innerHTML = giamgia;
 			document.getElementById("total").innerHTML = tong;
 			document.getElementById('text_card').innerHTML ="Thanh toán bằng Tiền mặt không được giảm giá.";
 			break;
 		}
 	
 	}

}

function thongtinCus() {
	// body...
	var hoten = document.getElementById('name').value;
	var dt = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var dc = document.getElementById('address').value;
	var ghichu = document.getElementById('note').value;

	

	var c = document.getElementById("contener_3");
	c.style.display = "block";


	document.getElementById("nameCus").innerHTML = hoten;
	document.getElementById("phoneCus").innerHTML = dt;
	document.getElementById("emailCus").innerHTML = email;
	document.getElementById("addressCus").innerHTML = dc;
	document.getElementById("noteCus").innerHTML = ghichu;
}
function xacnhan(){
	alert("Chúc mừng bạn đã đặt hàng thành công");
}