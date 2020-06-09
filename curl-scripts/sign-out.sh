curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
