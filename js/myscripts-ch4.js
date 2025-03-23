var optionCell = document.getElementsByClassName('optionCell');
var info = document.getElementsByClassName('info');
var archetypeCell = document.getElementsByClassName('archetypeCell');
var class_main = document.getElementsByClassName('class_main');
var current_display_archetype = document.getElementsByClassName('archetype1');
var current_display_main = true;
var background = document.getElementsByClassName('selector-stat')

function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}


function pageload() {
document.getElementsByClassName('overlay-content')[0].innerHTML = table_of_contents;
}

//Верхний переключатель быстрое создание, описание, классовые умения
function ChangeDisplay(button) {
for (i = 0; i < optionCell.length; i++) {
optionCell[i].style.backgroundColor = 'white';
info[i].style.display = 'none';
}
optionCell[button.id].style.backgroundColor = 'orange';
info[button.id].style.display = 'block';

}

//Архетипы. Рядом кнопка того же стиля, поэтому длина массива -2.
function ChangeArchetype(button) {
if (current_display_archetype != undefined) {
for (i = 0; i < current_display_archetype.length; i++) {
  current_display_archetype[i].style.display = 'none'
  }
}

for (i = 0; i < archetypeCell.length; i++) {
  {
    if (archetypeCell[i].innerHTML==button)
      {
        archetypeCell[i].style.backgroundColor = 'orange';
        current_display_archetype= document.getElementsByClassName('archetype'+i);
      }
    else
    {
        archetypeCell[i].style.backgroundColor = 'white';
    }
  }
}

//Функция на эту отдельную кнопку. Показ только инфы об архетипах, показ показ полного списка способностей.
for (i = 0; i < current_display_archetype.length; i++) {
  current_display_archetype[i].style.display = 'block';
}
}

function ChangeDisplayMain(button)
{

if (button == 'Только подклассы')
{
  archetypeCell[archetypeCell.length-1].innerHTML='Полный список умений'
 for (i = 0; i < class_main.length; i++) {
  class_main[i].style.display='none';
  }
}

else
{
  archetypeCell[archetypeCell.length-1].innerHTML='Только подклассы'
  for (i = 0; i < class_main.length; i++) {
    class_main[i].style.display='block';
  }
}

}

function SearchBackground ()
{

  var mstat = document.getElementById('mstat').value; //Выборка уровня в выпадающем списке
  var sstat1 = document.getElementById('sstat1').value; //Выборка школы1 в выпадающем списке
  var sstat2 = document.getElementById('sstat2').value; //Выборка школы2 в выпадающем списке

  //На случай если одна из школ пуста
  if ((sstat1 == "") && (sstat2 != "")) {
    sstat1 = sstat2
  } 
  else if ((sstat2 == "") && (sstat1 != "")) {
    sstat2 = sstat1
  }
  else if ((sstat2 == "") && (sstat1 == "")) {
    sstat1 = mstat
    sstat2 = mstat
  }
  

  for (var i = 0; i < background.length; i++) {
    if (background[i].classList.contains(mstat) && (background[i].classList.contains(sstat1) || background[i].classList.contains(sstat2)))
    {
      background[i].style.display = 'block'

    }
    else
    {
      background[i].style.display = 'none' 
    }
  }


}


function SearchFeat ()
{

  var mstat = document.getElementById('mstat').value; //Выборка уровня в выпадающем списке


  

  for (var i = 0; i < background.length; i++) {
    if (background[i].classList.contains(mstat))
    {
      background[i].style.display = 'block'

    }
    else
    {
      background[i].style.display = 'none' 
    }
  }


}