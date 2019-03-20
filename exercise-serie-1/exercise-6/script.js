$(document).ready(function() {
    // Fisher–Yates Shuffle (Knuth variant)
    // To shuffle an array a of n elements (indices 0..n-1):
    //   for i from n - 1 downto 1 do
    //        j <- random integer with 0 <= j <= i
    //        exchange a[j] and a[i]

    // jQuery specific:
    // 1) remove elements from DOM and convert them into a native JavaScript array
    // 2) apply algorithm
    // 3) inject the array back to DOM

    var a = $("#deck > div").remove().toArray();
    for (var i = a.length - 1; i >= 1; i--) {
        var x = Math.floor(Math.random() * (i + 1));
        var bi = a[i];
        var bx = a[x];
        a[i] = bx;
        a[x] = bi;
    }
    $("#deck").append(a);
});