type MyUser = {
  first_name: string;
  last_name: string;
  age: number
  gender: string;

};
type CamelCaseUser = {
  [key: string]: any;
};
//bài 0601
function getFullNames(users: MyUser[]) {
  return users.reduce((a: string[], b: MyUser) => {
    const fullName = `${b.first_name} ${b.last_name}`;
    a.push(fullName);
    return a;
  }, []);
}
//bài 0602
function filterByMan(users: MyUser[]): MyUser[] {
  return users.reduce((a: MyUser[], b: MyUser) => {
    if (b.gender === 'nam' && b.age < 40) {
      a.push(b);
    }
    return a;
  }, []);
}

//bài 0602


function snakeToCamel(users: MyUser[]): CamelCaseUser[] {
  return users.reduce((a: CamelCaseUser[], user: MyUser) => {
    const camelCaseUser: CamelCaseUser = Object.entries(user).reduce((camelCaseObj, [key, value]) => {
      const camelCaseKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
      const tempObj: Record<string, any> = camelCaseObj;
      tempObj[camelCaseKey] = value;
      return tempObj;
    }, {});

    a.push(camelCaseUser);
    return a;
  }, []);
}


// Ví dụ 
const userss: MyUser[] = [
  { first_name: 'thanh', last_name: 'tungggAAAA', age: 18, gender: "nam" },
  { first_name: 'thúy', last_name: 'hạnh', age: 55, gender: "nam" },
  { first_name: 'hoàng', last_name: 'quân', age: 18, gender: "nam" },
  { first_name: 'minh', last_name: 'thaoaaaa', age: 20, gender: "nữ" },
  { first_name: 'mai', last_name: 'hoa', age: 20, gender: "nữ" },
];

const allFullNames: string[] = getFullNames(userss);
console.log(allFullNames);
console.log(filterByMan(userss));
console.log(snakeToCamel(userss));


