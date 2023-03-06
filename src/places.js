const select = document.getElementById('city-select');
      const cityInfo = {
        "Ha Long Bay": {"photo": "https://www.visithalongbay.com/media/cache/1a/f5/1af56f83eb2ba43b31351ae2e0cb1b7b.jpg", "description": "Ha Long Bay is a famous tourist destination in Vietnam, located in the west of the Gulf of Tonkin, in the northeast of Vietnam. The total area of Ha Long Bay is about 1.500 km2, including two bays: Bai Tu Long Bay in the east and Lan Ha Bay in the south. With thousands of magnificent islands, Ha Long Bay has been recognized by UNESCO as a natural heritage of the world, the best destination of Vietnam, a masterpiece of the Creation."},
        "Ninh Binh": {"photo": "https://s1.1zoom.me/b4941/432/Vietnam_Mountains_Rivers_Boats_Province_Of_Ninh_565706_2560x1440.jpg", "description": "Ninh Binh is a province located at the southern of the Red River Delta, which is 90 km south of Hanoi. The province is famous for a high density of natural and cultural attractions such as Tam Coc - Bich Dong, Trang An, Bai Dinh Pagoda, Hoa Lu Capital, and Cuc Phuong National Park."},
        "Hoi An": {"photo": "https://www.hoianphototour.com/wp-content/uploads/2019/07/DSCF9826.jpg", "description": "Located approximately 30 km south of Da Nang, the serene beauty and ancient history of Hoi An Ancient Town in Quang Nam Province have made it a highly desirable destination for both domestic and international tourists. \n In July 2019, the well-known travel magazine Travel and Leisure named Hoi An the best city in the world, surpassing Tokyo, Japan, and Chiang Mai, Thailand. \n Are you ready to discover the charms of this ancient town? "},
        "Hue": {"photo": "https://goseeorbis.com/wp-content/uploads/2020/11/Dragon-at-the-Thuy-Tien-lake-Abandoned-Water-Park-in-Hue-Vietnam-1600x820.jpg", "description": "Hue City is the capital of Thua Thien Hue province, is a city in the middle of Vietnam, located adjacent to the beautiful city of Da Nang, separated by the majestic Hai Van Pass. This is one of the cities with the oldest cultural history and is a place to preserve many famous places and historical sites in the world."},
        "Sapa": {"photo": "https://www.kkday.com/en/blog/wp-content/uploads/vn_shutterstock_508367704-1170x667.jpg", "description": "Located in the Northwest of Vietnam, Sapa contains many wonders of the natural scenery and people. Sapa is known with the name 'the town of cloud', which attracts visitors with majestic mountain views and many unique experiences exploring the lives of ethnic minorities." },
        "Hai Phong": {"photo": "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2022_01_20/4317920201229170715015.jpg", "description": "Hai Phong is the third most populous city in Vietnam. The city lies on the northern coast just 74 miles from the nation's capital, Hanoi, and is located on the popular tourist route of Hanoi to Hai Phong and Halong Bay. It has an important port, railway, airport, and highway connections that link it with the rest of the county. " },
        "Nha Trang": {"photo": "https://vietnamnomad.com/wp-content/uploads/2020/04/Best-time-to-visit-nha-trang-vietnamnomad-1440x939.jpg", "description": "As one of the most beautiful beaches in Vietnam, Nha Trang has long been known as a tropical sea paradise. Not only long blue beaches, dozens of large and small islands remain untouched, Nha Trang is also an ideal destination for those who love culture - history as it is also the land of the flourishing Champa Kingdom in the past."},
        "Ho Chi Minh City": {"photo": "https://lesrivesexperience.com/wp-content/uploads/2018/11/sunset-on-saigon-river.jpg", "description": "As Vietnam's largest economic centre and cultural capital, Ho Chi Minh City boasts soaring skyscrapers that tower over charming French colonial structures and traditional pagodas from Saigon's yesteryear. Past the bustling streets and dizzying traffic, uncover the delicious street food, booming nightlife and historical landmarks that give this city its distinct appeal. Visit The War Remnants Museum for a glimpse into the Vietnam War, wander down Bui Vien Street for cheap beer or cruise through the Mekong Delta for sprawling views of paddy fields and houseboats." },
        "Hanoi": {"photo": "https://vietnamnomad.com/wp-content/uploads/2022/06/Hanoi-travel-guide-in-2022-by-Vietnamnomad.jpg", "description": "Hanoi is the capital city of Vietnam is located in the Red River Delta and home to a population of more than 8.5 million inhabitants. Hanoi has been pictured as a tranquil and ancient capital; however, it is not only about long-standing and historically cultural buildings but also active and lively activities"},
        "Da Nang": {"photo": "https://www.touropia.com/gfx/b/2018/07/da_nang.jpg", "description": "Da Nang's sandy beach and colonial buildings have been attracting visitors for years. Sat halfway between Hanoi in the north and Ho Chi Minh in the south, the city serves as a holiday destination for people who want to spend days relaxing on white sand."},
      };

      select.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          displayCityInfo(select.value);
        }
      });

      function displayCityInfo(cityName) {
        const cityInfoContainer = document.getElementById("city-info-container");
        cityInfoContainer.innerHTML = '';

        if (cityName in cityInfo) {
          const photoFilename = cityInfo[cityName].photo;
          const description = cityInfo[cityName].description;

          const container = document.createElement("div");
          container.classList.add("city-container");

          const photo = document.createElement("img");
          photo.src = photoFilename;
          photo.classList.add("city-photo");

          const desc = document.createElement("p");
          desc.innerText = description;
          desc.classList.add("city-description");

          container.appendChild(photo);
          container.appendChild(desc);

          cityInfoContainer.appendChild(container);
        } else {
          alert("Sorry, we don't have information on that city.");
        }
      }