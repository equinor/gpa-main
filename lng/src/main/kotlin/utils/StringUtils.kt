package com.equinor.neqsim.utils

fun stringToDouble(string: String): Double {
    return string.replace(",","").toDouble()
}