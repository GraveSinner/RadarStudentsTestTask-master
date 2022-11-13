/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[]
 {
    let i: number;
    let j: number;
    let flag: number =1;
    let Curr = 0;
    let CurrArr = new Array();
    while (Curr < numOfItems)
    {
        flag =1;
        i = Math.round(Math.random()*array.length);
        if (CurrArr.length == 0)
        {
            CurrArr.push(array[i]);
            Curr++;
        }
        else 
        {
            for (j=0;j<CurrArr.length;j++) //замена includes...
            {
                if (CurrArr[j] == array[i])
                {
                    flag = 0;
                    break;
                }
            }
            if (flag == 1)
            {
                CurrArr.push(array[i]);
                Curr++;
            }
        }
    }
    return CurrArr;
}

export default getRandomElements;