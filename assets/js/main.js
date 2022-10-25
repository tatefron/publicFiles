/**
 * Template Name: Vesperr - v2.2.1
 * Template URL: https://bootstrapmade.com/vesperr-free-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
	"use strict";

	// Smooth scroll for the navigation menu and links with .scrollto classes
	var scrolltoOffset = $('#header').outerHeight() - 15;
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrollto = target.offset().top - scrolltoOffset;

				if ($(this).attr("href") == '#header') {
					scrollto = 0;
				}

				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function () {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if ($(initial_nav).length) {
				var scrollto = $(initial_nav).offset().top - scrolltoOffset;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');
			}
		}
	});

	// Mobile Navigation
	if ($('.nav-menu').length) {
		var $mobile_nav = $('.nav-menu').clone().prop({
			class: 'mobile-nav d-lg-none d-flex justify-content-between flex-column'
		});
		$('body').append($mobile_nav);
		$('header .logo').clone().prependTo('.mobile-nav');
		$('.social-links').clone().insertAfter('.mobile-nav > ul');
		$('.mobile-nav').append('<div class="mob-lang"></div>');
		$('.mob-lang').insertAfter('.mobile-nav > ul');
		$('.mobile-nav .mob-lang, .mobile-nav .social-links').wrapAll('<div class="mobile-nav_bottom"></div>');
		$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
		$('body').append('<div class="mobile-nav-overly"></div>');
		$('.mobile-nav > div').removeClass('col-lg-1 col-5 ');


		$(document).on('click', '.mobile-nav-toggle', function (e) {
			$('body').toggleClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			$('.mobile-nav-overly').toggle();

		});


		$(document).on('click', '.mobile-nav .drop-down > a', function (e) {
			e.preventDefault();
			$(this).next().slideToggle(300);
			$(this).parent().toggleClass('active');
		});

		$(document).click(function (e) {
			var container = $(".mobile-nav, .mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {

					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();

				}
			}
		});
	} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
		$(".mobile-nav, .mobile-nav-toggle").hide();
	}

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, #mobile-nav');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active');
				}
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
			if (cur_pos < 300) {
				$(".nav-menu ul:first li:first").addClass('active');
			}
		});
	});
	// Menu Lang
	$(".lang-flag").click(function () {
		$(".language-dropdown").toggleClass("open");
	});
	$("ul.lang-list li").click(function () {
		$("ul.lang-list li").removeClass("selected");
		$(this).addClass("selected");
		if ($(this).hasClass('lang-en')) {
			$(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-fr").removeClass("lang-pt");
			$("#lang_selected").html("<p>EN</p>")
		} 
		// else if ($(this).hasClass('lang-pt')) {
		// 	$(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-fr").removeClass("lang-en");
		// 	$("#lang_selected").html("<p>PT</p>")
		// } 
		else {
			$(".language-dropdown").find(".lang-flag").addClass("lang-fr").removeClass("lang-en")
			// .removeClass("lang-pt")
			;
			$("#lang_selected").html("<p>FR</p>")
		}
		$(".language-dropdown").removeClass("open");
	});
	if (window.innerWidth < 768) {
		$('#lang_selector').prependTo('.mob-lang');
	}
	// Toggling the `.active` state on the `.sel`.
	$('.sel').click(function () {
		$(this).toggleClass('active');
	});

	// Toggling the `.selected` state on the options.
	$('.sel__box__options').click(function () {
		var txt = $(this).text();
		var index = $(this).index();

		$(this).siblings('.sel__box__options').removeClass('selected');
		$(this).addClass('selected');

		var $currentSel = $(this).closest('.sel');
		$currentSel.children('.sel__placeholder').text(txt);
		$currentSel.children('select').prop('selectedIndex', index + 1);
	});


	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	}

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	// jQuery try-blockerUp
	$('[data-toggle="try-blocker-up"]').counterUp({
		delay: 10,
		time: 1000
	});


	// Advantages carousel (uses the Owl Carousel library)
	if (window.innerWidth < 768) {
		$(".advantages-carousel").owlCarousel({
			autoplay: false,
			dots: true,
			loop: false,
			margin: 50,
			stagePadding: 40,
			responsive: {
				0: {
					items: 1
				}
				// ,
				// 768: {
				//   items: 2
				// },
				// 900: {
				//   items: 3
				// },
				// 1200: {
				//   items: 4
				// }
			}
		});
	};

	if (window.innerWidth < 992 && window.innerWidth > 768) {
		$('.advantages .advantage-wrap .title a').wrap('<div class="advantage-inner"></div>');
		// $('.advantages .advantage-wrap .title .icon').wrap('<div class="advantage-icon"></div>');

		$(".advantage-wrap .description").each(function () {
			$(this).parents('.advantage-wrap').find('.advantage-inner').append($(this));
		})


	};

	// Porfolio isotope and filter
	$(window).on('load', function () {
		var portfolioIsotope = $('.portfolio-container').isotope({
			itemSelector: '.portfolio-item',
			layoutMode: 'fitRows'
		});

		$('#portfolio-flters li').on('click', function () {
			$("#portfolio-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');

			portfolioIsotope.isotope({
				filter: $(this).data('filter')
			});
			aos_init();
		});

		// Initiate venobox (lightbox feature used in portofilo)
		$(document).ready(function () {
			$('.venobox').venobox();
		});
	});

	// Portfolio details carousel
	$(".portfolio-details-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1
	});

	// Init AOS
	function aos_init() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false
		});
	}
	$(window).on('load', function () {
		aos_init();
	});

	//upload

	function bs_input_file() {
		$(".input-file").before(
			function () {
				if (!$(this).prev().hasClass('input-ghost')) {
					var element = $("<input type='file' class='input-ghost' id='imgInp' style='visibility:hidden; height:0'>"); //<input type="file" id='imgInp'  name="">  
					// $("<img id='blah' src='#' alt='your image' />").insertAfter('.input-ghost');
					element.attr("name", $(this).attr("name"));
					element.change(function () {
						element.next(element).find('input').val((element.val()).split('\\').pop());
						$('.input-file_block').addClass('input-file_uploaded');
						$('.input-file_block .delete-btn').addClass('file-block_show');
						$('.input-file_block .upload-btn').removeClass('file-block_show');
						document.getElementById('upload-icon').innerHTML =
							document.getElementById('upload-icon').innerHTML + '<span class="file-size">' + (this.files[0].size / 1024 / 1024).toFixed(2) + "MB" + '</span>';
						var f = this.files[0];
						if (f.size > 1000000 || f.fileSize > 1000000) {
							document.getElementById('file-error').innerHTML =
								document.getElementById('file-error').innerHTML + '<span>' + 'Error: maximum file size is 100 mb' + '</span>';
							$('.input-file_block').addClass('input-file_error');
							this.value = null;
						}
					});

					$(this).find("button.btn-choose").click(function () {
						element.click();
					});
					$(this).find("button.btn-reset").click(function () {
						element.val(null);
						$(this).parents(".input-file").find('input').val('');
						$('.input-file_block').removeClass('input-file_uploaded');
						$('.input-file_block').removeClass('input-file_error');

						$('.input-file_block .delete-btn').removeClass('file-block_show');
						$('.input-file_block .upload-btn').addClass('file-block_show');
						$('.file-size').remove();
						$('.file-error span').remove();
						$('#result').empty();
					});
					$(this).find('input').css("cursor", "pointer");
					$(this).find('input').mousedown(function () {
						$(this).parents('.input-file').prev().click();
						return false;
					});
					return element;
				}
			}
		);
	}


	$(function () {
		bs_input_file();
	});


	setInterval(function () {
		// preview file
		function startRead() {
			// obtain input element through DOM

			var file = document.getElementById('imgInp').files[0];
			console.log(file[0]);
			if (file) {
				getAsText(file);
			}
		}

		function getAsText(readFile) {

			var reader = new FileReader();

			// Read file into memory as UTF-16
			reader.readAsText(readFile, "UTF-8");

			// Handle progress, success, and errors
			reader.onprogress = updateProgress;
			reader.onload = loaded;
			reader.onerror = errorHandler;
		}

		function updateProgress(evt) {
			if (evt.lengthComputable) {
				// evt.loaded and evt.total are ProgressEvent properties
				var loaded = (evt.loaded / evt.total);
				if (loaded < 1) {
					// Increase the prog bar length
					// style.width = (loaded * 200) + "px";
				}
			}
		}

		function loaded(evt) {
			// Obtain the read file data
			var fileString = evt.target.result;

			var div = document.getElementById('result');
			div.innerHTML += fileString;
			console.log(JSON.parse(csvJSON(fileString)));
			// xhr.send(fileString)
		}

		function errorHandler(evt) {
			if (evt.target.error.name == "NotReadableError") {
				// The file could not be read
			}
		}

		function csvJSON(csv) {

			var lines = csv.split("\n");

			var result = [];

			var headers = lines[0].split(",");

			for (var i = 1; i < lines.length; i++) {

				var obj = {};
				var currentline = lines[i].split(",");

				for (var j = 0; j < headers.length; j++) {
					obj[headers[j]] = currentline[j];
				}

				result.push(obj);

			}

			//return result; //JavaScript object
			return JSON.stringify(result); //JSON
		}

		if (document.getElementById("imgInp") !== null) {
			document.getElementById("imgInp").onchange = function () {
				startRead()
			};
			// preview file end
		}
	});


	setInterval(function () {
		function PreviewImage() {
			pdffile = document.getElementById("uploadPDF").files[0];
			pdffile_url = URL.createObjectURL(pdffile);
			$('#viewer').attr('src', pdffile_url);
		}


		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('#blah').attr('src', e.target.result);
				}

				reader.readAsDataURL(input.files[0]); // convert to base64 string
			}
		}

		$("#imgInp").change(function () {
			readURL(this);
		});
	}, 1);


	/// Force Download File with Javascript

	// function download(filename, text) {
	//     var createDl = document.createElement('a');
	//     createDl.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	//     createDl.setAttribute('download', filename);
	//     createDl.style.display = 'none';
	//     document.body.appendChild(createDl);
	//     createDl.click();
	//     document.body.removeChild(createDl);
	// }

	// document.getElementById("downloadMe").onclick = function(){
	//   download("myFileName.txt", "My texts here");
	// }

	// count characters textfields
	function markRequired() {
	    var control = $(this).children(".form-control");
	    var label = $(this).children("label");
	    if (control.attr("required") == "required") {
	        label.addClass("required");
	    }
	}

	function countCharacters() {
	    var max = $(this).attr("maxlength");
	    var min = $(this).attr("minlength");
	    var length = $(this).val().length;
	    var counter = length;
	    var helper = $(this).parent('.form-group').find("span");
	    // Switch to the singular if there's exactly 1 character remaining
	    if (counter !== 1) {
	        helper.text(counter + '/' + max);
	    } else {
	        helper.text(counter + '/' + max);
	    }
	    // Make it red if there are 0 characters remaining
	    // if (counter < min) {
	    //     helper.removeClass("text-muted");
	    //     helper.addClass("text-danger");
	    // } else {
	    //     helper.removeClass("text-danger");
	    //     helper.addClass("text-muted");
	    // }
	}

	$(document).ready(function () {
	    $(".form-group").each(markRequired);
	    $(".form-control").each(countCharacters);
	    $(".form-control").keyup(countCharacters);
	});

	// add tags
	if ($('section').hasClass('upload-u-admin') ){
		var input2 = document.querySelector('textarea[name=tags2]'),
		    // init Tagify script on the above inputs
		  
		tagify2 = new Tagify(input2, {
		    enforeWhitelist : true,
		    whitelist       : ["The Shawshank Redemption", "The Godfather", "The Godfather: Part II", "The Dark Knight", "12 Angry Men", "Schindler's List", "Pulp Fiction", "The Lord of the Rings: The Return of the King", "The Good, the Bad and the Ugly", "Fight Club", "The Lord of the Rings: The Fellowship of the Ring", "Star Wars: Episode V - The Empire Strikes Back", "Forrest Gump", "Inception", "The Lord of the Rings: The Two Towers", "One Flew Over the Cuckoo's Nest", "Goodfellas", "The Matrix", "Seven Samurai", "Star Wars: Episode IV - A New Hope", "City of God", "Se7en", "The Silence of the Lambs", "It's a Wonderful Life", "The Usual Suspects", "Life Is Beautiful", "Léon: The Professional", "Spirited Away", "Saving Private Ryan", "La La Land", "Once Upon a Time in the West", "American History X", "Interstellar", "Casablanca", "Psycho", "City Lights", "The Green Mile", "Raiders of the Lost Ark", "The Intouchables", "Modern Times", "Rear Window", "The Pianist", "The Departed", "Terminator 2: Judgment Day", "Back to the Future", "Whiplash", "Gladiator", "Memento", "Apocalypse Now", "The Prestige", "The Lion King", "Alien", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Sunset Boulevard", "The Great Dictator", "Cinema Paradiso", "The Lives of Others", "Paths of Glory", "Grave of the Fireflies", "Django Unchained", "The Shining", "WALL·E", "American Beauty", "The Dark Knight Rises", "Princess Mononoke", "Aliens", "Oldboy", "Once Upon a Time in America", "Citizen Kane", "Das Boot", "Witness for the Prosecution", "North by Northwest", "Vertigo", "Star Wars: Episode VI - Return of the Jedi", "Reservoir Dogs", "M", "Braveheart", "Amélie", "Requiem for a Dream", "A Clockwork Orange", "Taxi Driver", "Lawrence of Arabia", "Like Stars on Earth", "Double Indemnity", "To Kill a Mockingbird", "Eternal Sunshine of the Spotless Mind", "Toy Story 3", "Amadeus", "My Father and My Son", "Full Metal Jacket", "The Sting", "2001: A Space Odyssey", "Singin' in the Rain", "Bicycle Thieves", "Toy Story", "Dangal", "The Kid", "Inglourious Basterds", "Snatch", "Monty Python and the Holy Grail", "Hacksaw Ridge", "3 Idiots", "L.A. Confidential", "For a Few Dollars More", "Scarface", "Rashomon", "The Apartment", "The Hunt", "Good Will Hunting", "Indiana Jones and the Last Crusade", "A Separation", "Metropolis", "Yojimbo", "All About Eve", "Batman Begins", "Up", "Some Like It Hot", "The Treasure of the Sierra Madre", "Unforgiven", "Downfall", "Raging Bull", "The Third Man", "Die Hard", "Children of Heaven", "The Great Escape", "Heat", "Chinatown", "Inside Out", "Pan's Labyrinth", "Ikiru", "My Neighbor Totoro", "On the Waterfront", "Room", "Ran", "The Gold Rush", "The Secret in Their Eyes", "The Bridge on the River Kwai", "Blade Runner", "Mr. Smith Goes to Washington", "The Seventh Seal", "Howl's Moving Castle", "Lock, Stock and Two Smoking Barrels", "Judgment at Nuremberg", "Casino", "The Bandit", "Incendies", "A Beautiful Mind", "A Wednesday", "The General", "The Elephant Man", "Wild Strawberries", "Arrival", "V for Vendetta", "Warrior", "The Wolf of Wall Street", "Manchester by the Sea", "Sunrise", "The Passion of Joan of Arc", "Gran Torino", "Rang De Basanti", "Trainspotting", "Dial M for Murder", "The Big Lebowski", "The Deer Hunter", "Tokyo Story", "Gone with the Wind", "Fargo", "Finding Nemo", "The Sixth Sense", "The Thing", "Hera Pheri", "Cool Hand Luke", "Andaz Apna Apna", "Rebecca", "No Country for Old Men", "How to Train Your Dragon", "Munna Bhai M.B.B.S.", "Sholay", "Kill Bill: Vol. 1", "Into the Wild", "Mary and Max", "Gone Girl", "There Will Be Blood", "Come and See", "It Happened One Night", "Life of Brian", "Rush", "Hotel Rwanda", "Platoon", "Shutter Island", "Network", "The Wages of Fear", "Stand by Me", "Wild Tales", "In the Name of the Father", "Spotlight", "Star Wars: The Force Awakens", "The Nights of Cabiria", "The 400 Blows", "Butch Cassidy and the Sundance Kid", "Mad Max: Fury Road", "The Maltese Falcon", "12 Years a Slave", "Ben-Hur", "The Grand Budapest Hotel", "Persona", "Million Dollar Baby", "Amores Perros", "Jurassic Park", "The Princess Bride", "Hachi: A Dog's Tale", "Memories of Murder", "Stalker", "Nausicaä of the Valley of the Wind", "Drishyam", "The Truman Show", "The Grapes of Wrath", "Before Sunrise", "Touch of Evil", "Annie Hall", "The Message", "Rocky", "Gandhi", "Harry Potter and the Deathly Hallows: Part 2", "The Bourne Ultimatum", "Diabolique", "Donnie Darko", "Monsters, Inc.", "Prisoners", "8½", "The Terminator", "The Wizard of Oz", "Catch Me If You Can", "Groundhog Day", "Twelve Monkeys", "Zootopia", "La Haine", "Barry Lyndon", "Jaws", "The Best Years of Our Lives", "Infernal Affairs", "Udaan", "The Battle of Algiers", "Strangers on a Train", "Dog Day Afternoon", "Sin City", "Kind Hearts and Coronets", "Gangs of Wasseypur", "The Help"]
		});

		// toggle Tagify on/off
		document.querySelector('input[type=checkbox]').addEventListener('change', function(){
		    document.body.classList[this.checked ? 'add' : 'remove']('disabled');
		});
	}


	// search

 $(".search").keyup(function () {

	    var searchTerm = $(".search").val();
	    var listItem = $('.results tbody').children('tr');
	    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
	    
	  $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
	        return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	    }
	  });
	    
	  $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
	    $(this).attr('visible','false');
	  });

	  $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
	    $(this).attr('visible','true');
	  });

	  var jobCount = $('.results tbody tr[visible="true"]').length;
	    $('.counter').text(jobCount + ' item');

	  if(jobCount == '0') {$('.no-result').show();}
	    else {$('.no-result').hide();}
	});

	// Iterate over each select element
	$('.upload-files select').each(function () {

		// Cache the number of options
		var $this = $(this),
			numberOfOptions = $(this).children('option').length;

		// Hides the select element
		$this.addClass('s-hidden');

		// Wrap the select element in a div
		$this.wrap('<div class="select"></div>');

		// Insert a styled div to sit over the top of the hidden select element
		$this.after('<div class="styledSelect"></div>');

		// Cache the styled div
		var $styledSelect = $this.next('div.styledSelect');

		// Show the first select option in the styled div
		$styledSelect.text($this.children('option').eq(0).text());

		// Insert an unordered list after the styled div and also cache the list
		var $list = $('<ul />', {
			'class': 'options'
		}).insertAfter($styledSelect);

		// Insert a list item into the unordered list for each select option
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}

		// Cache the list items
		var $listItems = $list.children('li');
		$this.parents('.select').find('ul').wrap('<div class="options-wrapper"></div>');
		// Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
		$styledSelect.click(function (e) {
			e.stopPropagation();
			$('div.styledSelect.active').each(function () {
				$(this).removeClass('active').next('.options-wrapper').hide();
			});
			$(this).toggleClass('active');
			$(this).toggleClass('active').next('.options-wrapper').toggle();
		});

		// Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
		// Updates the select element to have the value of the equivalent option
		$listItems.click(function (e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			// $list.hide();
			$('.options-wrapper').hide();
			/* alert($this.val()); Uncomment this for demonstration! */
		});

		// Hides the unordered list when clicking outside of it
		$(document).click(function () {
			$styledSelect.removeClass('active');
			// $list.hide();
			$('.options-wrapper').hide();
		});

	});



	var options = [];

	$( '.dropdown-menu a' ).on( 'click', function( event ) {

	   var $target = $( event.currentTarget ),
	       val = $target.attr( 'data-value' ),
	       $inp = $target.find( 'input' ),
	       idx;

	   if ( ( idx = options.indexOf( val ) ) > -1 ) {
	      options.splice( idx, 1 );
	      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
	   } else {
	      options.push( val );
	      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
	   }

	   $( event.target ).blur();
	      
	   console.log( options );
	   return false;
	});



	// daterange
	$(function () {
		$('input[name="daterange"]').daterangepicker({
			autoUpdateInput: true
			//     ,
			// autoApply: true
		})
	});


	setInterval(function () {
		if ($('#option2').parents().hasClass('active')) {
			$('.upload-block_right .daterange-block').addClass('show-daterange');
		} else {
			$('.upload-block_right .daterange-block').removeClass('show-daterange');
		}
	}, 1);


	//tab faq 
	let faqMenu = document.getElementsByClassName("faq-menu-list");
	let faqList = document.getElementsByClassName("faq-list");

	let newFaqMenu = Object.values(faqMenu);
	let newFaqList = Object.values(faqList);
	newFaqMenu.forEach((element, index) => {
		element.addEventListener("click", () => {
			newFaqMenu.forEach((el) => {
				el.classList.remove("active");
			});
			newFaqList.forEach((item) => {
				item.classList.remove('active');
			});
			element.classList.add("active");
			newFaqList[index].classList.add("active");
		});
	});

	let faqListHeader = document.querySelectorAll('.faq-list-header');
	faqListHeader.forEach((element, index) => {
		element.addEventListener("click", () => {
			faqListHeader.forEach((el, ind) => {
				if (ind !== index) {
					el.classList.remove("active");
				}
			});
			element.classList.toggle('active');
		});
	});

	//contact textarea 
	let formGroupTextarea = document.querySelectorAll('.form-group.wrap-message');
	if (formGroupTextarea.length > 0) {
		formGroupTextarea[0].addEventListener("click", () => {
			formGroupTextarea[0].classList.add('active');
		});
		$(document).mouseup((e) => {
			let closeCurrencyOut = $(".form-group.wrap-message");
			if (closeCurrencyOut.length) {
				if (!closeCurrencyOut.is(e.target) &&
					closeCurrencyOut.has(e.target).length === 0) {
					formGroupTextarea[0].classList.remove('active');
				}
			}
		});
	}
	$(".categories-tabs").owlCarousel({
		autoplay: false,
		dots: true,
		nav: true,
		loop: false,
		margin: 60,
		stagePadding: 30,
		items: 6,
		responsive: {
			320: {
				items: 1,
				margin: 30
			},
			375: {
				items: 2,
				margin: 30
			},
			580: {
				items: 3,
				margin: 30
			},
			768: {
				items: 4,
				margin: 30
			},
			900: {
				items: 5,
				margin: 30
			},
			1100: {
				items: 5,
				margin: 60
			},
			1200: {
				items: 6
			},
		},
		navText: ['<span class="prev-btn owl-btn"><img src="assets/img/icon-list-arrow.png" /></span>', '<span class="next-btn owl-btn"><img src="assets/img/icon-list-arrow.png" /></span>']
	});
	let owlItem;
	if ($(".wrap-reviews > div").length === 1) {
		owlItem = 1;
		$(".wrap-reviews").addClass("single");
	} else {
		owlItem = 2;
	}
	$(".wrap-reviews").owlCarousel({
		autoplay: false,
		dots: true,
		nav: true,
		loop: false,
		// margin: 20,
		responsive: {
			320: {
				items: 1,
			},
			400: {
				items: 1,
			},
			769: {
				items: owlItem
			}
		},
		navText: ['<span class="prev-btn owl-btn"><img src="assets/img/icon-list-arrow.png" /></span>', '<span class="next-btn owl-btn"><img src="assets/img/icon-list-arrow.png" /></span>']
	});
	let navLink = document.querySelectorAll('.nav-link');
	navLink.forEach(element => {
		element.addEventListener('click', () => {
			navLink.forEach(el => {
				el.classList.remove('active');
			});
		});
	});

	$('.faq-menu-list-result').click(function () {
		$('.faq .faq-menu ul').toggleClass('active');
	});
	$('.faq .faq-menu ul li a').click(function () {
		$('.faq .faq-menu ul').removeClass('active');
		$('#category-show').html($(this).html());
	});
	$('.open-sidebar').click(function () {
		$('.sidebar').addClass('active');
		$('.overlay').addClass('active');
	});
	$(document).mouseup(function (e) {
		var div = $(".sidebar");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');
			$('.overlay').removeClass('active');
		}
	});
	// let horizontalScrollerCard = document.getElementById("horizontal-scroller");
	// if (horizontalScrollerCard) {
	// 	horizontalScrollerCard.addEventListener('wheel', function (event) {
	// 		if (event.deltaMode == event.DOM_DELTA_PIXEL) {
	// 			var modifier = 1;
	// 			// иные режимы возможны в Firefox
	// 		} else if (event.deltaMode == event.DOM_DELTA_LINE) {
	// 			var modifier = parseInt(getComputedStyle(this).lineHeight);
	// 		} else if (event.deltaMode == event.DOM_DELTA_PAGE) {
	// 			var modifier = this.clientHeight;
	// 		}
	// 		if (event.deltaY != 0) {
	// 			// замена вертикальной прокрутки горизонтальной
	// 			this.scrollLeft += modifier * event.deltaY;
	// 			event.preventDefault();
	// 		}
	// 	});
	// }
	// select style 

	const selectSingle = document.querySelector('.select');
	const selectSingle_title = selectSingle.querySelector('.select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

	// Toggle menu 
	selectSingle_title.addEventListener('click', () => {

		if (selectSingle.getAttribute('data-state') === 'active') {
			selectSingle.setAttribute('data-state', '');
		} else {
			selectSingle.setAttribute('data-state', 'active');
		}
	});
	// Close when click to option 
	for (let i = 0; i < selectSingle_labels.length; i++) {
		selectSingle_labels[i].addEventListener('click', (evt) => {
			selectSingle_title.textContent = evt.target.textContent;
			selectSingle.setAttribute('data-state', '');
		});
	};
	$(".table-header-responsive").click(function () {
		$(this).toggleClass("active");
	});
	// document.body.onclick = function(e) {
	//   e = e || event;
	//   target = e.target || e.srcElement;
	//   if (target.className !== "select__title") {
	//       selectSingle.setAttribute('data-state', '');
	//   }
	// }


})(jQuery);