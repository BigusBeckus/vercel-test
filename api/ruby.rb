# Full disclosure: I've never even touched Ruby before :(
Handler = Proc.new do [req, res]
  res.status = 200
  res['Content-Type'] = 'text/text; charset=utf-8'
  # res.body = "Hello #{} from the Ruby file."
  res.body = "#{req}"
end