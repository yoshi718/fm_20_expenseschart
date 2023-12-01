"use strict";

import money from "./data.json" assert { type: "json" };

const graph = document.querySelector(".graph");
const total = document.querySelector(".total");

const maxValue = Math.max(...money.map((e) => e.amount));
let monthlyTotal = 0;

money.forEach((e) => {
  monthlyTotal += e.amount;
  //   This makes the tallest bar 250 pixels high which is the most spent
  //   then makes the rest a percentage of 250 based on the
  //   percentage it is of the highest amount spent
  const height = Math.trunc((e.amount / maxValue) * 250);

  const markup = `
    <div class="day">
        <div class="dailyAmt">$${e.amount}</div>
        <div class="verticalBar" style="height: ${height}px"></div>
        <span class="dayOfWeek">${e.day}</span>
    </div>
 `;

  graph.insertAdjacentHTML("beforeend", markup);
});

total.textContent = `$${monthlyTotal.toFixed(2)}`;
