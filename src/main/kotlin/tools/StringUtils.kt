package com.equinor.neqsim.tools

fun stringToDouble(string: String): Double {
    return string.replace(",","").toDouble()
}