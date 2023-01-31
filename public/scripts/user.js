import { renderBlock } from "./lib.js";
export function renderUserBlock(name, avatar, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : "ничего нет";
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock("user-block", `
    <div class="header-container">
      <img class="avatar" src=${avatar} alt=${name} />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? " active" : ""}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBWSxFQUNaLE1BQWMsRUFDZCxtQkFBMkI7SUFFM0IsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQTtJQUNqRixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUUzRCxXQUFXLENBQ1QsWUFBWSxFQUNaOztnQ0FFNEIsTUFBTSxRQUFRLElBQUk7OzRCQUV0QixJQUFJOztrQ0FFRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUM3RCxTQUFTLGdCQUFnQjs7OztLQUl4QixDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tIFwiLi9saWIuanNcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVXNlckJsb2NrKFxuICBuYW1lOiBzdHJpbmcsXG4gIGF2YXRhcjogc3RyaW5nLFxuICBmYXZvcml0ZUl0ZW1zQW1vdW50OiBudW1iZXJcbikge1xuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiBcItC90LjRh9C10LPQviDQvdC10YJcIlxuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IHRydWUgOiBmYWxzZVxuXG4gIHJlbmRlckJsb2NrKFxuICAgIFwidXNlci1ibG9ja1wiLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz0ke2F2YXRhcn0gYWx0PSR7bmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHtuYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gXCIgYWN0aXZlXCIgOiBcIlwiXG4gICAgfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApO1xufVxuIl19