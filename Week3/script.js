/** 1.Open a new js file and start by declaring in array with in there 10 strings. These strings should be of book title's **/
let  book_titles = ["hamlet" , "the_adventures_of_huckleberry_finn" , "one_hundred_years_of_solitude" , "the_great_gatsby" , "the_brothers_karamazov" , "moby_dick" , "the_alchemist" ,"nineteen_eighty_four" , "to_kill_mockingbird" , "the_shadow_wind"];

/** 2.Create a basic html file called inxed.html and use it to load the js file, confirm the console.log show the array. **/
//console.log(book_titles);

/** 3.Make a function that generate a ul with li elements for each book ID in the array using a for loop. **/
function getBookIds(ids_arr){
	let ul = document.createElement('ul');
	for(let i=0; i< ids_arr.length ; i++){	
		let li = createLlElement(ids_arr[i]);
		ul.appendChild(li);
	}
	return ul;
}
function createLlElement(title){
	let li = document.createElement('li');
	li.innerText = title;
	return li;
}

console.log(getBookIds(book_titles).innerHTML);
//document.getElementsByTagName('body')[0].appendChild(getBookIds(book_titles));

/** 4.Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author. **/
let book = function(book_id , book_title , book_author , book_lang){
	this.id = book_id;
	this.title = book_title;
	this.author = book_author;
	this.lang = book_lang;
}

let books_arr = [];
books_arr.push(new book('hamlet' , 'Hamlet' , 'William Shakespeare' , 'English' ));
books_arr.push(new book('the_adventures_of_huckleberry_finn' , 'The Adventures of Huckleberry Finn' , 'Mark Twain' , 'English')); 
books_arr.push(new book('one_hundred_years_of_solitude' , 'One Hundred Years of Solitude' , 'Gabriel García Márquez' , 'Spanish' ));
books_arr.push(new book('the_great_gatsby' , 'The Great Gatsby' , 'F. Scott Fitzgerald' , 'English' ));
books_arr.push(new book('the_brothers_karamazov' , 'The Brothers Karamazov' , 'Fyodor Dostoyevsky' , 'Russian' ));
books_arr.push(new book('moby_dick' , 'Moby Dick' , 'Herman Melville' , 'English' ));
books_arr.push(new book('the_alchemist' , 'The Alchemist' , 'Paulo Coelho' , 'Portuguese' ));
books_arr.push(new book('nineteen_eighty_four' , 'Nineteen Eighty Four' , 'George Orwell' , 'English' ));
books_arr.push(new book('to_kill_mockingbird' , 'To Kill a Mockingbird' , 'Harper Lee' , 'English' ));
books_arr.push(new book('the_shadow_wind' , 'The Shadow of the Wind' , 'Carlos Ruiz Zafón' , 'Spanish' ));

/*for(obj of books_arr)
	console.log(obj);*/

/** 5.Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title  **/
function renderBooks(books){
	let ul = document.createElement('ul');
	for(let i=0; i< books.length ; i++){
		ul.appendChild(renderBook(books[i]));
	}
	return ul;
}
function renderBook(book){
	let li = document.createElement('li');
	let h3 = document.createElement('h3');
	let div1 = document.createElement('div');
	let div2 = document.createElement('div');
	let p1 = document.createElement('p');
	let p2 = document.createElement('p');
	let span1 = document.createElement('span');
	let span2 = document.createElement('span');
	let span3 = document.createElement('span');
	let span4 = document.createElement('span');
	
	h3.innerHTML = book.title;
	span1.innerHTML = 'Author : ';
	span1.setAttribute("class", "label");
	span2.innerHTML = book.author;
	span3.innerHTML = 'Language : ';
	span3.setAttribute("class", "label");
	span4.innerHTML = book.lang;
	
	p1.appendChild(span1);
	p1.appendChild(span2);
	p2.appendChild(span3);
	p2.appendChild(span4);
	
	div2.setAttribute("class", "book_details");
	div2.appendChild(p1);
	div2.appendChild(p2);
	
	div1.setAttribute("class", "book_info");
	div1.appendChild(div2);
	
	li.setAttribute("id", book.id);
	li.appendChild(h3);
	li.appendChild(div1);

	return li;
}
//console.log(renderBooks(books_arr).innerHTML);

document.getElementsByTagName('body')[0].appendChild(renderBooks(books_arr));

/** 7. Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source. Now loop over these entries Then write a function which places an image at the corresponding li element.  **/
let book_covers = {
	"hamlet": "./img/hamlet.jpg", 
	"the_adventures_of_huckleberry_finn" : "img/the_adventures_of_huckleberry_finn.jpg",
	"one_hundred_years_of_solitude" : "img/one_hundred_years_of_solitude.jpg",
	"the_great_gatsby" : "img/the_great_gatsby.jpg",
	"the_brothers_karamazov" : "img/the_brothers_karamazov.jpg",
	"moby_dick" : "img/moby_dick.jpg",
	"the_alchemist" : "img/the_alchemist.jpg",
	"nineteen_eighty_four" : "img/nineteen_eighty_four.jpg",
	"to_kill_mockingbird" : "img/to_kill_mockingbird.jpg",
	"the_shadow_wind" : "img/the_shadow_wind.jpg",
}
let book_ids_arr = Object.keys(book_covers);
//console.log(book_ids_arr);
function setBookImages(){
	for(let book_id of book_ids_arr){
		let img = document.createElement('img');
		img.src = book_covers[book_id];
		img.alt = book_id;
		document.getElementById(book_id).getElementsByClassName('book_info')[0].appendChild(img);
	}
}
setBookImages();
