var array = [0, 0, 0, 0, 0, 0, 0]
//1000 раз
for (let step = 0; step < 10000; step++)
{		var rolls = []
//сделать 2-4 ролла
	    rolls.push(Math.floor((Math.random() * 6)));
	    rolls.push(Math.floor((Math.random() * 6)));
	    //rolls.push(Math.floor((Math.random() * 6)));
	    //rolls.push(Math.floor((Math.random() * 6)));
//отсортировать по возрастанию		
		rolls.sort()
//проверить не успех успехов ли это проверяем, что 2 последних элемента массива 5 (типа 6 на кубе)
if ((rolls.at(rolls.length-2)==5) && (rolls.at(rolls.length-1)==5))
{
	//Если да, добавляем в отдельную строку
array[6]+=1
}
else
	//если нет, просто в эррей добавляем соотвествующую единичку
{
array[rolls.at(rolls.length -1)]+=1
}
}