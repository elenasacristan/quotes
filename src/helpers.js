export function differenceYears(year) {
  return new Date().getFullYear() - year;
}

export function incrementByBrand(brand) {
  let increment;

  switch (brand) {
    case "European":
      increment = 1.30;
      break;
    case "American":
      increment = 1.15;
      break;
    case "Asiatic":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}


export function incrementByPlan(plan) {
   return plan === "basic" ? 1.2 : 1.5;
  }
  