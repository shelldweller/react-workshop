REVEALJS_URL=https://github.com/hakimel/reveal.js/archive/3.4.0.tar.gz
REVEALJS_DIR=revealjs


FNAME=`basename $REVEALJS_URL`

if [ -e $REVEALJS_DIR ]; then
    rm -r $REVEALJS_DIR
fi

mkdir $REVEALJS_DIR

if [ -e $FNAME ]; then
    rm $FNAME
fi

echo Downloading $REVEALJS_URL
wget $REVEALJS_URL
tar -xzf $FNAME -C revealjs --strip-components=1

