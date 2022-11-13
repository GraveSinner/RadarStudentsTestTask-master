import getRandomElements from "./getRandomElements";
import Table from "./table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 100;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);
console.log(ARRAY_OF_UNIQUE_VALUES);
const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 10);
console.log(result);
console.log("#".repeat(70) + "\n");
//********************************************************************* 

console.log("Певоначальная таблица: ");
const Students: string[][] =
    [
    ["1", "Монахов", "Леонид", "Гатчинаere", "0"],
    ["2", "Алкон", "Айван", "Стикс", ""],
    ["3", "Никита", "Никита", "Альтеракская долина", "100"],
    ["4", "Андрей", "Андреевич", "Бишкек", "200"]];
const table = new Table(Students);
table.print();
table.delete(2);
table.input();

