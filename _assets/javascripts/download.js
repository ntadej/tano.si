var BrowserDownload = {
  Tano: function() {
    if (BrowserDetect.OS == "unknown") {
      $('#download-tano-desc').remove();
      return;
    }

    var button = 'Download Tano for ';
    $('#download-tano').text(button + BrowserDetect.OS);

    if ($('#download-tano').length) {
      $.getJSON('/tano-player/download/info.json', function(data) {
        switch (BrowserDetect.OS) {
          case 'Windows':
            $('#download-tano-desc').html('<a href="/download/">Download latest 2.0 beta!</a>'); //$('#download-tano-desc').html('64-bit edition');
            $('#download-tano').attr('href', data.stable.win32 != "" ? data.stable.win32 : data.devel.win32);
            break;
          case 'OS X':
            $('#download-tano-desc').html('Supported on OS X 10.6 and later, beta release.');
            $('#download-tano').attr('href', data.stable.osx != "" ? data.stable.osx : data.devel.osx);
            break;
          case 'Linux':
            $('#download-tano-desc').html('New 2.0 beta coming soon!'); //$('#download-tano-desc').html('Ubuntu and Arch packages available.');
            $('#download-tano').attr('href', helper);
            break;
          default:
            break;
        }
      });
    }
  }
};

var BrowserTabs = {
  Tano: function() {
    switch (BrowserDetect.OS) {
      case 'Windows':
        $('#tabs-tano-config li:eq(2) a').tab('show');
        break;
      case 'OS X':
        $('#tabs-tano-config li:eq(1) a').tab('show');
        break;
      case 'Linux':
        $('#tabs-tano-config li:eq(0) a').tab('show');
        break;
      default:
        break;
    }
  }
};