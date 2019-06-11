import React from "react";
import { Pie } from "react-chartjs-2";
import filteredExpense from "../filter/filterLogic";
import { connect } from "react-redux";

const ExpenseChart = props => {
  console.log("category", props.expense.category);

  const foodCategoryTotal = props.expense
    .filter(food => food.category === "food")
    .map(foodCategory => foodCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const clothingCategoryTotal = props.expense
    .filter(clothing => clothing.category === "clothing")
    .map(clothingCategory => clothingCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const educationCategoryTotal = props.expense
    .filter(education => education.category === "education")
    .map(educationCategory => educationCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const entertainmentCategoryTotal = props.expense
    .filter(entertainment => entertainment.category === "entertainment")
    .map(entertainmentCategory => entertainmentCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const travelCategoryTotal = props.expense
    .filter(travel => travel.category === "travel")
    .map(travelCategory => travelCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const electronicCategoryTotal = props.expense
    .filter(electronic => electronic.category === "electronic")
    .map(electronicCategory => electronicCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const utilitiesCategoryTotal = props.expense
    .filter(utilities => utilities.category === "utilities")
    .map(utilitiesCategory => utilitiesCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const transportationCategoryTotal = props.expense
    .filter(transportation => transportation.category === "transportation")
    .map(transportationCategory => transportationCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const savingsCategoryTotal = props.expense
    .filter(savings => savings.category === "savings")
    .map(savingsCategory => savingsCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const debtCategoryTotal = props.expense
    .filter(debt => debt.category === "debt")
    .map(debtCategory => debtCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const otherCategoryTotal = props.expense
    .filter(other => other.category === "savings")
    .map(otherCategory => otherCategory.amount)
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const total = props.expense
    .map(expense => {
      return expense.amount;
    })
    .reduce((sum, value) => {
      return sum + parseFloat(value.toString());
    }, 0);

  const categoryData = [
    foodCategoryTotal,
    clothingCategoryTotal,
    educationCategoryTotal,
    entertainmentCategoryTotal,
    electronicCategoryTotal,
    travelCategoryTotal,
    utilitiesCategoryTotal,
    transportationCategoryTotal,
    savingsCategoryTotal,
    debtCategoryTotal,
    otherCategoryTotal
  ];

  const categoryPercentage = categoryData.map(data => {
    return Math.round((data / total) * 100);
  });
  const categoryAmount = categoryData.map(data => {
    return data;
  });

  const categoryName = [
    "food",
    "clothing",
    "education&Training",
    "entertainment",
    "electronic",
    "travel",
    "utilities",
    "transportation",
    "savings",
    "debt",
    "other"
  ];

  //   console.log('current month', moment(new Date().getMonth()))

  // const year = new Date().getFullYear();
  // console.log('year',year);

  // const month= new Date().getMonth();
  // console.log('month', month);
  // const loopmonth = month.map((months)=>{
  //   return months-1
  // })

  // const firstdate= new Date(year,month, 1)

  // console.log('firstdate',firstdate.getTime()/1000)
  // const lastdate = new Date(year, month + 1, 0);

  // console.log('lastdate:',lastdate.getTime()/1000); // last day in January
  // const startdate = new Date('2019.04.01').getTime() / 1000
  // const enddate = new Date('2019.04.30').getTime() / 1000
  // console.log('start:',startdate)
  // console.log('enddate:', enddate)

  // const amount = props.expense.filter(date=> date.createdAt >= firstdate || date.createdAt<=lastdate)
  // .map(aamount=>aamount.amount)
  // .reduce((sum,value)=>{
  //   return sum+parseFloat(value.toString())
  // },0)

  // console.log('apr total:' , amount)
  // let monthName=['1', '2','mar','apr','may','jun,','july','aug','sep','oct','nov','dec'];
  // let thisMonth= new Date().getMonth();

  // for (let i=0; i<=12; i++) {
  //  // monthLabel[d.getMonth()] + ' ' + d.getFullYear();
  //   console.log(monthName[thisMonth])
  //   thisMonth++;
  //   if(thisMonth>11){thisMonth=0}

  // //  return moment(monthName.push.month-1).format('MMM');
  // }

  // console.log('last 12 months:',monthName);
  // let monthLabel=['Jan','feb'];

  // const totalSpending = {
  //   labels: monthLabel,
  //   datasets: [
  //     {
  //       data: categoryPercentage,
  //       backgroundColor: [
  //         '#89D4D4'
  //       ],
  //       hoverBackgroundColor: [
  //         '#89D4D4'
  //       ]
  //     }
  //   ]

  // }
  const dataByCategory = {
    labels: categoryName,
    datasets: [
      {
        data: categoryPercentage,
        categoryAmount,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#288F23",
          "#FF7100",
          "#E32C00",
          "#1A325B",
          "#762FBB",
          "#C22072",
          "#FBFB3D",
          "#004C29"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#288F23",
          "#FF7100",
          "#E32C00",
          "#1A325B",
          "#762FBB",
          "#C22072",
          "#FBFB3D",
          "#004C29"
        ]
      }
    ]
  };

  return (
    <div className="chart-card-item">
      <Pie
        data={dataByCategory}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          title: {
            display: true,
            text: "Spending Percentage by Category"
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                return (
                  data["labels"][tooltipItem["index"]] +
                  ": " +
                  data["datasets"][0]["data"][tooltipItem["index"]] +
                  "%"
                );
              }
            }
          }
        }}
        width={400}
        height={400}
      />
    </div>
  );
};
const mapStateToProps = state => ({
  expense: filteredExpense(state.expense, state.filters)
});
export default connect(mapStateToProps)(ExpenseChart);
