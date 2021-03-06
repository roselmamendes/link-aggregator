parametro=$1

case $parametro in

  build-image)
    docker build -t link-agg .
    ;;

  start)
    docker run --rm -p 3000:3000 -v ${PWD}:/usr/src/app -it link-agg npm run server
    ;;

  test)
    docker run --rm -v ${PWD}:/usr/src/app -it link-agg ../node_modules/.bin/jest $2
    ;;

  *)
    echo "Comandos:"
    echo "build-image|start|test"
    ;;
esac
