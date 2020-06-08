curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--data '{
  "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
  }
}'

echo
