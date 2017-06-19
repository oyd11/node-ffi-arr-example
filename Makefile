
# MacOS Makefile

CXXFLAGS = -fPIC -Wall

UNAME := $(shell uname)
SOEXT := unknown


ifeq ($(UNAME),Linux)
	SOEXT := so
endif
ifeq ($(UNAME),Darwin)
	SOEXT := dylib
endif

$(info ************  UNAME: $(UNAME) ************)
$(info ************  SOEXT: $(SOEXT) ************)

test_lib.$(SOEXT): cArr.o Makefile
	g++ $(CXXFLAGS) cArr.o -shared -o test_lib.$(SOEXT) -Wl


view: test_lib.$(SOEXT)
	symbols test_lib.$(SOEXT)

clean-all:
	rm -rf node_modules *.o *.so *.dylib

all: test_lib.$(SOEXT)


run: callc.js package.json
	npm install


