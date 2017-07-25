#!/usr/bin/env bash

set -e

cd $(dirname "$(readlink -f "$0")")

packages=$(find ../../../../../../material-components-web/packages/ -name "mdc-*" -type d)

for p in ${packages}
do
    name=$(echo ${p} | sed 's/^.*mdc-//g')
    ln -sf ${p} ${name}
done
