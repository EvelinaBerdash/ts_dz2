import { renderBlock } from "./lib.js";
function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (month < 10) {
        return `${year}-0${month}-${day}`;
    }
    else {
        return `${year}-${month}-${day}`;
    }
}
export function renderSearchFormBlock(dateIn, dateOut) {
    const today = new Date();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    formatDate(today);
    formatDate(lastDayOfMonth);
    renderBlock("search-form-block", `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${formatDate(dateIn)} min=${formatDate(today)} max=${formatDate(lastDayOfMonth)} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${formatDate(dateOut)} min=${formatDate(today)} max=${formatDate(lastDayOfMonth)} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUV0QyxTQUFTLFVBQVUsQ0FBQyxJQUFJO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUUzQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7UUFDZCxPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQztLQUNuQztTQUFNO1FBQ0wsT0FBTyxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFLENBQUM7S0FDbEM7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLHFCQUFxQixDQUFDLE1BQVksRUFBRSxPQUFhO0lBQy9ELE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDekIsTUFBTSxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFOUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUUzQixXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzswREFpQnNELFVBQVUsQ0FDaEUsTUFBTSxDQUNQLFFBQVEsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLFVBQVUsQ0FDNUMsY0FBYyxDQUNmOzs7OzJEQUkwRCxVQUFVLENBQ2pFLE9BQU8sQ0FDUixRQUFRLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxVQUFVLENBQzVDLGNBQWMsQ0FDZjs7Ozs7Ozs7Ozs7O0tBWUksQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSBcIi4vbGliLmpzXCJcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICByZXR1cm4gYCR7eWVhcn0tMCR7bW9udGh9LSR7ZGF5fWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhkYXRlSW46IERhdGUsIGRhdGVPdXQ6IERhdGUpIHtcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCkgKyAyLCAwKTtcblxuICBmb3JtYXREYXRlKHRvZGF5KTtcbiAgZm9ybWF0RGF0ZShsYXN0RGF5T2ZNb250aCk7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgXCJzZWFyY2gtZm9ybS1ibG9ja1wiLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2Zvcm1hdERhdGUoXG4gICAgZGF0ZUluXG4gICl9IG1pbj0ke2Zvcm1hdERhdGUodG9kYXkpfSBtYXg9JHtmb3JtYXREYXRlKFxuICBsYXN0RGF5T2ZNb250aFxuKX0gbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPSR7Zm9ybWF0RGF0ZShcbiAgICBkYXRlT3V0XG4gICl9IG1pbj0ke2Zvcm1hdERhdGUodG9kYXkpfSBtYXg9JHtmb3JtYXREYXRlKFxuICBsYXN0RGF5T2ZNb250aFxuKX0gbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApO1xufSJdfQ==